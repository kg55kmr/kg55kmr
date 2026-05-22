import fs from 'fs';
import path from 'path';
import { readFile } from 'fs/promises';
import { fdir } from 'fdir';
import matter from 'gray-matter';
import { workspaceRoot } from 'workspace-root';

function write(root, data) {
  writePosts(data.posts, "posts.json");
  writePosts(data.postsList, "posts-list.json");
  writePosts(data.latestPosts, "latest-posts.json");
  writePosts(data.album, "album.json");
  function writePosts(data2, file) {
    fs.writeFileSync(path.resolve(root, file), JSON.stringify(data2));
  }
}

async function processPosts(root) {
  const dirs = await new fdir().onlyDirs().withRelativePaths().exclude((d) => d.startsWith(".")).filter((p) => p.split(path.sep).length === 3).crawl(root).withPromise();
  const dateNoThumbnail = new Date(2016, 11, 27);
  const posts = await Promise.all(
    dirs.map(async (item) => {
      const file = await readFile(path.resolve(root, item, "index.md"), "utf8");
      const { data, content } = matter(file);
      const type = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const title = data["title"];
      const pin = data["pin"];
      const sortId = data["id"] ?? id;
      const [year, month, day] = sortId.split("-").map(Number);
      const date = { year, month, day };
      const noThumbnail = type === "news" && new Date(year, month - 1, day) < dateNoThumbnail || void 0;
      const full = {
        title,
        date,
        pin,
        content,
        noThumbnail
      };
      const meta = {
        id,
        title,
        date,
        pin,
        noThumbnail
      };
      let albumPost;
      if (type === "news") {
        const postIds = findPostsWithImageKitRef(type, id, content);
        if (postIds.length > 0)
          albumPost = {
            title,
            date,
            postIds
          };
      }
      return {
        full,
        meta,
        albumPost,
        type,
        sortId
      };
    })
  );
  posts.sort(
    (a, b) => b.sortId.localeCompare(a.sortId, void 0, { numeric: true })
  );
  const fullPosts = {};
  const postsList = {};
  const album = {};
  for (const { full, meta, albumPost, type } of posts) {
    fullPosts[type] ??= {};
    fullPosts[type][meta.id] = full;
    postsList[type] ??= { items: [], pinItems: [] };
    const postsListTarget = meta.pin ? postsList[type].pinItems : postsList[type].items;
    postsListTarget.push(meta);
    if (albumPost) album[meta.id] = albumPost;
  }
  const latestPosts = {};
  for (const [type, group] of Object.entries(postsList)) {
    latestPosts[type] = {
      items: group.items.slice(0, 5),
      pinItems: group.pinItems
    };
  }
  return {
    posts: fullPosts,
    postsList,
    latestPosts,
    album
  };
}
const reCarousel = /<Carousel( id="(.*)")* \/>/g;
function findPostsWithImageKitRef(kind, id, content) {
  const carousels = [];
  let m;
  id = `${kind}/${id}`;
  while ((m = reCarousel.exec(content)) !== null) {
    switch (true) {
      case m[2] === void 0:
        carousels.push(id);
        break;
      case m[2].startsWith("*"):
        carousels.push(`${id}-${m[2].slice(1)}`);
        break;
      default:
        carousels.push(m[2]);
    }
  }
  return carousels;
}

async function getRoot() {
  const root = await workspaceRoot();
  if (root === null) throw new Error("workspace root is not found");
  const postsRoot = path.resolve(root, "..", "posts");
  return postsRoot;
}

export { getRoot as g, processPosts as p, write as w };
