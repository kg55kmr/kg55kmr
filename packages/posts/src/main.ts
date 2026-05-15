import { Redis } from "@upstash/redis";
import { processPosts } from "./process";
import { getRoot } from "./root";
import { uploadImages } from "./upload-images";

const root = await getRoot();
await uploadImages(root);

const { posts, latestPosts, album } = await processPosts(root);

const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", posts);
pipeline.json.set("latest-posts", "$", latestPosts);
pipeline.json.set("album", "$", album);
await pipeline.exec();
