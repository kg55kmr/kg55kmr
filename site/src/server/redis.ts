import { Redis } from "@upstash/redis";

export async function get<T>(opts: { key: string; path?: string }) {
  const redis = Redis.fromEnv();
  const result = await redis.json.get<T[]>(opts.key, opts.path ?? "$");

  if (!result) throw new Error(`'${opts.key}' not found`);
  return result[0];
}

export async function set(key: string, value: Record<string, unknown>) {
  const redis = Redis.fromEnv();
  await redis.json.set(key, "$", value);
}
