import { Redis } from "@upstash/redis";
import { processPosts } from "./process";
import { replacers } from "./replacers";
import { getRoot } from "./root";
import { uploadImages } from "./upload-images";

const root = await getRoot();
await uploadImages(root);

const { posts, postsList, latestPosts, album } = await processPosts(root);

const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", filterKeys(posts, replacers.posts));
pipeline.json.set(
  "posts-list",
  "$",
  filterKeys(postsList, replacers.postsList),
);
pipeline.json.set(
  "latest-posts",
  "$",
  filterKeys(latestPosts, replacers.postsList),
);
pipeline.json.set("album", "$", filterKeys(album, replacers.album));
await pipeline.exec();

function filterKeys<T>(value: T, exclude: string[]): T {
  const e = new Set(exclude);
  return JSON.parse(
    JSON.stringify(value, (key, value) => {
      if (e.has(key)) return undefined;
      return value;
    }),
  );
}
