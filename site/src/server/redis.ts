import { Redis } from "@upstash/redis";

export async function getFromRedis<T>(opts: {
  key: string;
  path?: string;
}): Promise<T> {
  const redis = Redis.fromEnv();
  const result = await redis.json.get<T[]>(opts.key, opts.path ?? "$");

  if (!result) throw new Error(`${opts.key} is null`);
  return result[0];
}
