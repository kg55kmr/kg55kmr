import { writeFile, stat, readFile } from 'fs/promises';
import path from 'path';
import { fdir } from 'fdir';
import { existsSync, readFileSync } from 'fs';
import matter from 'gray-matter';
import { workspaceRoot } from 'workspace-root';

async function write(root, data) {
  if (data.isUpToDate) return;
  await writePosts(data.posts, "posts.json");
  await writePosts(data.postsList, "posts-list.json");
  await writePosts(data.latestPosts, "latest-posts.json");
  await writePosts(data.album, "album.json");
  async function writePosts(data2, file) {
    await writeFile(path.resolve(root, file), JSON.stringify(data2));
  }
}

class Cache {
  cache = {};
  root;
  isUpToDate = true;
  constructor(root) {
    this.root = root;
    const cachePath = path.join(root, "posts.json");
    if (existsSync(cachePath)) {
      const data = readFileSync(cachePath, "utf8");
      this.cache = JSON.parse(data);
    }
  }
  async get(item) {
    const type = path.basename(path.dirname(item));
    const id = path.basename(item.trim());
    const filePath = path.join(this.root, `${type}/${id}/index.md`);
    const itemStats = await stat(filePath);
    const cachedItem = this.cache[type]?.[id];
    if (cachedItem?.mtimeMs === itemStats.mtimeMs)
      return { full: cachedItem, type, id, filePath };
    this.isUpToDate = false;
    const fileContent = await readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const title = data["title"];
    const pin = data["pin"];
    const [year, month, day] = id.split("-").map(Number);
    const date = { year, month, day };
    const noThumbnail = type === "news" && new Date(year, month - 1, day) < dateNoThumbnail || void 0;
    return {
      full: {
        title,
        date,
        pin,
        content,
        noThumbnail,
        mtimeMs: itemStats.mtimeMs
      },
      type,
      id,
      filePath
    };
  }
}
const dateNoThumbnail = new Date(2016, 11, 27);

async function processPosts(root) {
  const cache = new Cache(root);
  const dirs = await new fdir().withRelativePaths().glob("**/index.md").crawl(root).withPromise();
  const posts = await Promise.all(
    dirs.map(async (item) => {
      const { full, type, id, filePath } = await cache.get(path.dirname(item));
      const { title, date, content, pin, noThumbnail } = full;
      const errors = checkTags(content);
      if (errors.length > 0)
        throw new Error(`${filePath}: unknown tags: ${JSON.stringify(errors)}`);
      const meta = { id, title, date, pin, noThumbnail };
      let albumPost;
      if (type === "news") {
        const postIds = findPostsWithImageKitRef(type, id, content);
        if (postIds.length > 0) albumPost = { title, date, postIds };
      }
      return {
        full,
        meta,
        albumPost,
        type,
        id
      };
    })
  );
  posts.sort((a, b) => b.id.localeCompare(a.id, void 0, { numeric: true }));
  const fullPosts = {};
  const postsList = {};
  const album = {};
  for (const { full, meta, albumPost, type, id } of posts) {
    fullPosts[type] ??= {};
    fullPosts[type][id] = full;
    postsList[type] ??= { items: [], pinItems: [] };
    const postsListTarget = meta.pin ? postsList[type].pinItems : postsList[type].items;
    postsListTarget.push(meta);
    if (albumPost) album[id] = albumPost;
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
    album,
    isUpToDate: cache.isUpToDate
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
const allowedTags = /* @__PURE__ */ new Set([
  "Carousel",
  "Gallery",
  "YouTube",
  "FBVideo",
  "Pdf",
  "Embed",
  "Quote",
  "img",
  "pre",
  "br"
]);
const reTag = /<\/?([^>\s]*)/g;
function checkTags(content) {
  const errors = [];
  let m;
  while ((m = reTag.exec(content)) !== null) {
    if (m.index === reTag.lastIndex) {
      reTag.lastIndex++;
    }
    if (!allowedTags.has(m[1])) errors.push(m[1]);
  }
  return errors;
}

async function getRoot() {
  const root = await workspaceRoot();
  if (root === null) throw new Error("workspace root is not found");
  const postsRoot = path.resolve(root, "..", "posts");
  return postsRoot;
}

export { getRoot as g, processPosts as p, write as w };
