import { JSONPath } from "jsonpath-plus";
import { type Posts, getPosts } from "posts";

export async function getLocalPosts<K extends keyof Posts>(key: K) {
  const posts = await getPosts();
  return posts[key];
}

export async function getPostFromJSON<T, K extends keyof Posts = keyof Posts>(
  key: K,
  path: string,
): Promise<T> {
  const json = await getLocalPosts(key);
  return JSONPath({ path, json, wrap: false });
}
