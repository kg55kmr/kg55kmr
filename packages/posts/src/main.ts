import { Redis } from "@upstash/redis";
import { write } from "./local";
import { processPosts } from "./process";
import { getRoot } from "./root";
import { uploadImages } from "./upload-images";

const root = await getRoot();
await uploadImages(root);

const { posts, postsList, latestPosts, album } = await processPosts(root);

const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", posts);
pipeline.json.set("posts-list", "$", postsList);
pipeline.json.set("latest-posts", "$", latestPosts);
pipeline.json.set("album", "$", album);
await pipeline.exec();

write(root, { posts, postsList, latestPosts, album });
