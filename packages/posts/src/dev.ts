import fs from "fs";
import path from "path";
import { processPosts } from "./process";
import { getRoot } from "./root";

const root = await getRoot();
const { posts, latestPosts, album } = await processPosts(root);

writePosts(posts, "posts.json");
writePosts(latestPosts, "latest-posts.json");
writePosts(album, "album.json");

function writePosts(data: unknown, file: string) {
  fs.writeFileSync(path.resolve(root, file), JSON.stringify(data));
}
