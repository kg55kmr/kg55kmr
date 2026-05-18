import fs from "fs";
import path from "path";
import { processPosts } from "./process";
import { getRoot } from "./root";

const root = await getRoot();
const { posts, postsList, latestPosts, album } = await processPosts(root);

const replacer = ["kind", "sortId", "slideshows", "content"];

writePosts(posts, "posts.json", ["kind", "id", "sortId", "pin", "slideshows"]);
writePosts(postsList, "posts-list.json", replacer);
writePosts(latestPosts, "latest-posts.json", replacer);
writePosts(album, "album.json", ["kind", "sortId", "pin", "content"]);

function writePosts(data: unknown, file: string, exclude: string[]) {
  const e = new Set(exclude);
  fs.writeFileSync(
    path.resolve(root, file),
    JSON.stringify(data, (key, value) => {
      if (e.has(key)) return undefined;
      return value;
    }),
  );
}
