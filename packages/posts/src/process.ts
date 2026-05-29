import type {
  AlbumPost,
  AlbumPosts,
  FullPosts,
  MetaPost,
  Post,
  Posts,
  PostsList,
} from "./types";
import path from "path";
import { fdir } from "fdir";
import { Cache } from "./cache";

type ProcessedPost = {
  full: Post;
  meta: MetaPost;
  albumPost?: AlbumPost;

  type: string;
  id: string;
};

export async function processPosts(root: string): Promise<Posts> {
  const cache = new Cache(root);

  const dirs = await new fdir()
    .withRelativePaths()
    .glob("**/index.md")
    .crawl(root)
    .withPromise();

  const posts = await Promise.all(
    dirs.map(async (item) => {
      const { full, type, id, filePath } = await cache.get(path.dirname(item));
      const { title, date, content, pin, noThumbnail } = full;

      const errors = checkTags(content);
      if (errors.length > 0)
        throw new Error(`${filePath}: unknown tags: ${JSON.stringify(errors)}`);

      const meta: MetaPost = { id, title, date, pin, noThumbnail };

      let albumPost: AlbumPost | undefined;

      if (type === "news") {
        const postIds = findPostsWithImageKitRef(type, id, content);
        if (postIds.length > 0) albumPost = { title, date, postIds };
      }

      return {
        full,
        meta,
        albumPost,
        type,
        id,
      } satisfies ProcessedPost;
    }),
  );

  posts.sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true }));

  const fullPosts: FullPosts = {};
  const postsList: PostsList = {};
  const album: AlbumPosts = {};

  for (const { full, meta, albumPost, type, id } of posts) {
    fullPosts[type] ??= {};
    fullPosts[type][id] = full;

    postsList[type] ??= { items: [], pinItems: [] };

    const postsListTarget = meta.pin
      ? postsList[type].pinItems
      : postsList[type].items;

    postsListTarget.push(meta);

    if (albumPost) album[id] = albumPost;
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
    isUpToDate: cache.isUpToDate,
  };
}

const reCarousel = /<Carousel( id="(.*)")* \/>/g;

function findPostsWithImageKitRef(kind: string, id: string, content: string) {
  const carousels = [];
  let m;

  id = `${kind}/${id}`;

  while ((m = reCarousel.exec(content)) !== null) {
    switch (true) {
      case m[2] === undefined:
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

const allowedTags = new Set([
  "Carousel",
  "Gallery",
  "YouTube",
  "FBVideo",
  "Pdf",
  "Embed",
  "Quote",
  "img",
  "pre",
  "br",
]);

const reTag = /<\/?([^>\s]*)/g;

function checkTags(content: string) {
  const errors: string[] = [];
  let m;

  while ((m = reTag.exec(content)) !== null) {
    if (m.index === reTag.lastIndex) {
      reTag.lastIndex++;
    }

    if (!allowedTags.has(m[1])) errors.push(m[1]);
  }

  return errors;
}
