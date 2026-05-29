import { JSONPath } from "jsonpath-plus";
import { type Posts, getPosts } from "posts";

export function getLocalPosts<K extends keyof Posts>(key: K) {
  return getPosts().then((r) => r[key]);
}

export async function getPostFromJSON<T, K extends keyof Posts = keyof Posts>(
  key: K,
  path: string,
): Promise<T> {
  const json = await getLocalPosts(key);
  return JSONPath({ path, json, wrap: false });
}
