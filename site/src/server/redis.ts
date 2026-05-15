import { readFile } from "fs/promises";
import { Redis } from "@upstash/redis";

export async function getFromRedis<T>(key: string, ...path: string[]) {
  if (import.meta.env.DEV) {
    const result: T = await readFile(`${__POSTS__}/${key}.json`, "utf8").then(
      (r) => JSON.parse(r),
    );

    return result;
  }

  const redis = Redis.fromEnv();
  const result = await redis.json.get<T>(key, ...path);
  if (!result) throw new Error(`${key} is null`);
  return result;
}
