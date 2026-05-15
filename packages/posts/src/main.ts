import fs from "fs";
import path from "path";
import { Redis } from "@upstash/redis";
import { workspaceRoot } from "workspace-root";
import { processPosts } from "./process";
import { uploadImages } from "./upload-images";

const root = await workspaceRoot();
if (root === null) throw new Error("workspace root is not found");

const postsRoot = path.resolve(root, "..", "posts");

await uploadImages(postsRoot);

const { posts, album } = await processPosts(postsRoot);

const redis = new Redis({
  url: process.env["KV_REST_API_URL"],
  token: process.env["KV_REST_API_TOKEN"],
});

await Promise.all([
  redis.json.set("posts", "$", posts),
  redis.json.set("album", "$", album),
]);

writePosts(album, "album.json");

function writePosts(data: unknown, file: string) {
  fs.writeFileSync(path.resolve(postsRoot, file), JSON.stringify(data));
}
