import { Redis } from "@upstash/redis";

export async function getFromRedis<T>(
  key: string,
  ...path: string[]
): Promise<T | null> {
  const redis = Redis.fromEnv();
  return redis.json.get(key, ...path);
}
