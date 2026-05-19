import { readFile } from "fs/promises";
import { Redis } from "@upstash/redis";
import { JSONPath } from "jsonpath-plus";

export async function getFromRedis<T>(key: string, path?: string): Promise<T> {
  if (import.meta.env.DEV) {
    const json = await readFile(`${__POSTS__}/${key}.json`, "utf8").then((r) =>
      JSON.parse(r),
    );

    if (path) return JSONPath({ path, json, wrap: false });
    return json;
  }

  const redis = Redis.fromEnv();
  const result = await redis.json.get<T[]>(key, path ?? "$");

  if (!result) throw new Error(`${key} is null`);
  return result[0];
}
