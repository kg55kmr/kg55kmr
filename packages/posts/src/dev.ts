import fs from "fs";
import path from "path";
import { processPosts } from "./process";
import { replacers } from "./replacers";
import { getRoot } from "./root";

const root = await getRoot();
const { posts, postsList, latestPosts, album } = await processPosts(root);

writePosts(posts, "posts.json", replacers.posts);
writePosts(postsList, "posts-list.json", replacers.postsList);
writePosts(latestPosts, "latest-posts.json", replacers.postsList);
writePosts(album, "album.json", replacers.album);

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
