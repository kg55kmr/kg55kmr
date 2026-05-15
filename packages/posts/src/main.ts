import path from "path";
import { Redis } from "@upstash/redis";
import { workspaceRoot } from "workspace-root";
import { processPosts } from "./process";
import { uploadImages } from "./upload-images";

const root = await workspaceRoot();
if (root === null) throw new Error("workspace root is not found");

const postsRoot = path.resolve(root, "..", "posts");

await uploadImages(postsRoot);

const { posts, latestPosts, album } = await processPosts(postsRoot);

const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", posts);
pipeline.json.set("latest-posts", "$", latestPosts);
pipeline.json.set("album", "$", album);
await pipeline.exec();
