import type {
  AlbumPost,
  AlbumPosts,
  FullPosts,
  MetaPost,
  Post,
  Posts,
  PostsList,
} from "./types";
import { readFile } from "fs/promises";
import path from "path";
import { fdir } from "fdir";
import matter from "gray-matter";

type ProcessedPost = {
  full: Post;
  meta: MetaPost;
  albumPost?: AlbumPost;

  type: string;
  sortId: string;
};

export async function processPosts(root: string): Promise<Posts> {
  const dirs = await new fdir()
    .onlyDirs()
    .withRelativePaths()
    .exclude((d) => d.startsWith("."))
    .filter((p) => p.split(path.sep).length === 3)
    .crawl(root)
    .withPromise();

  const dateNoThumbnail = new Date(2016, 11, 27);
  const posts = await Promise.all(
    dirs.map(async (item) => {
      const file = await readFile(path.resolve(root, item, "index.md"), "utf8");
      const { data, content } = matter(file);

      const type = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const title: string = data["title"];
      const pin: boolean | undefined = data["pin"];
      const sortId = (data["id"] as string | undefined) ?? id;
      const [year, month, day] = sortId.split("-").map(Number);
      const date = { year, month, day };
      const noThumbnail =
        (type === "news" && new Date(year, month - 1, day) < dateNoThumbnail) ||
        undefined;
      const full: Post = {
        title,
        date,
        pin,
        content,
        noThumbnail,
      };

      const meta: MetaPost = {
        id,
        title,
        date,
        pin,
        noThumbnail,
      };

      let albumPost: AlbumPost | undefined;

      if (type === "news") {
        const postIds = findPostsWithImageKitRef(type, id, content);
        if (postIds.length > 0)
          albumPost = {
            title,
            date,
            postIds,
          };
      }

      return {
        full,
        meta,
        albumPost,
        type,
        sortId,
      } satisfies ProcessedPost;
    }),
  );

  posts.sort((a, b) =>
    b.sortId.localeCompare(a.sortId, undefined, { numeric: true }),
  );

  const fullPosts: FullPosts = {};
  const postsList: PostsList = {};
  const album: AlbumPosts = {};

  for (const { full, meta, albumPost, type } of posts) {
    fullPosts[type] ??= {};
    fullPosts[type][meta.id] = full;

    postsList[type] ??= { items: [], pinItems: [] };

    const postsListTarget = meta.pin
      ? postsList[type].pinItems
      : postsList[type].items;

    postsListTarget.push(meta);

    if (albumPost) album[meta.id] = albumPost;
  }

  const latestPosts: PostsList = {};

  for (const [type, group] of Object.entries(postsList)) {
    latestPosts[type] = {
      items: group.items.slice(0, 5),
      pinItems: group.pinItems,
    };
  }

  return {
    posts: fullPosts,
    postsList,
    latestPosts,
    album,
  };
}

const reSlideshow = /<slideshow( id="(.*)")* \/>/g;

function findPostsWithImageKitRef(kind: string, id: string, content: string) {
  const slideshows = [];
  let m;

  id = `${kind}/${id}`;

  while ((m = reSlideshow.exec(content)) !== null) {
    switch (true) {
      case m[2] === undefined:
        slideshows.push(id);
        break;

      case m[2].startsWith("*"):
        slideshows.push(`${id}-${m[2].slice(1)}`);
        break;

      default:
        slideshows.push(m[2]);
    }
  }

  return slideshows;
}
