import type { FullPosts, Posts, PostsList } from "./types";
import { readFile } from "fs/promises";
import path from "path";
import { fdir } from "fdir";
import matter from "gray-matter";
import { extractSlideshows } from "./extract-slideshows";

export async function processPosts(root: string): Promise<Posts> {
  const dirs = await new fdir()
    .onlyDirs()
    .withRelativePaths()
    .exclude((d) => d.startsWith("."))
    .filter((p) => p.split(path.sep).length === 3)
    .crawl(root)
    .withPromise();

  const posts = await Promise.all(
    dirs.map(async (item) => {
      const file = await readFile(path.resolve(root, item, "index.md"), "utf8");
      const { data, content } = matter(file);

      const kind = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const sortId = (data["id"] as string | undefined) ?? id;
      const [year, month, day] = sortId.split("-").map(Number);

      return {
        kind,
        id,
        sortId: sortId as string | undefined,
        title: data["title"] as string,
        pin: data["pin"] || undefined,

        year,
        month: month - 1,
        day,

        slideshows: extractSlideshows(kind, id, content),
        thumbnail: undefined,
        content,
      };
    }),
  );

  posts.sort((a, b) =>
    b.sortId!.localeCompare(a.sortId!, undefined, { numeric: true }),
  );

  const postsList: PostsList = {};
  const fullPosts: FullPosts = {};

  for (const post of posts) {
    postsList[post.kind] ??= { items: [], pinItems: [] };

    const target = post.pin
      ? postsList[post.kind].pinItems
      : postsList[post.kind].items;

    target.push(post);

    fullPosts[post.kind] ??= {};
    fullPosts[post.kind][post.id] = post;
  }

  if (postsList["news"])
    for (const post of postsList["news"].items.slice(-363)) {
      post.thumbnail = false;
    }

  const latestPosts: PostsList = {};

  for (const [kind, group] of Object.entries(postsList)) {
    latestPosts[kind] = {
      items: group.items.slice(0, 5),
      pinItems: group.pinItems,
    };
  }

  const album = posts
    .filter((post) => post.kind === "news" && post.slideshows!.length > 0)
    .map((post) => post);

  return {
    posts: fullPosts,
    postsList,
    latestPosts,
    album,
  };
}
