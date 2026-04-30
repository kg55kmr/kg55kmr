import type { Posts } from "./types";
import { access, readFile } from "fs/promises";
import path from "path";
import { fdir } from "fdir";
import matter from "gray-matter";
import _ from "lodash";
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
      const { data, content } = matter(
        await readFile(path.resolve(root, item, "index.md"), "utf8"),
      );

      item = item.replaceAll("\\", "/");

      const kind = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const sortId = data["id"] ? (data["id"] as string) : id;
      const title = data["title"] as string;
      const titleLower = title.toLowerCase();
      const pin = data["pin"] !== undefined;
      const [year, month, day] = sortId.split("-");
      const date = { year, month, day };
      const slideshows = extractSlideshows(kind, id, content);

      let thumbnailExists = true;

      await access(path.resolve(root, item, "thumbnail.jpg")).catch(
        () => (thumbnailExists = false),
      );

      return {
        kind,
        id,
        sortId: sortId as string | undefined,
        title,
        titleLower,
        pin,
        date,
        thumbnailExists,
        slideshows: slideshows as string[] | undefined,
      };
    }),
  );

  posts.sort((a, b) =>
    b.sortId!.localeCompare(a.sortId!, undefined, { numeric: true }),
  );

  const album = posts
    .filter((post) => post.kind === "news" && post.slideshows!.length > 0)
    .map((post) => ({ ...post }));

  posts.forEach((p) => {
    delete p.sortId;
    delete p.slideshows;
  });

  const groupedPosts = _(posts)
    .groupBy((v) => v.kind)
    .mapValues((p) => {
      const result = _.groupBy(p, (p) => (p.pin ? "pin" : "items"));
      if (!("pin" in result)) result["pin"] = [];
      return result;
    })
    .mapValues(({ items, pin }) => ({
      items,
      pin,
    }))
    .value();

  const latestPosts = _.mapValues(groupedPosts, ({ items, pin }) => ({
    items: items.slice(0, 5),
    pin,
  }));

  return {
    posts: groupedPosts,
    latestPosts,
    album,
  };
}
