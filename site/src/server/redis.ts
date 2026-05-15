import { Redis } from "@upstash/redis";

export async function getFromRedis<T>(key: string, ...path: string[]) {
  const redis = Redis.fromEnv();
  const result = await redis.json.get<T>(key, ...path);
  if (!result) throw new Error(`${key} is null`);
  return result;
}
