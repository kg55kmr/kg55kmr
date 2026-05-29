import { writeFile } from "fs/promises";
import path from "path";

export async function write(
  root: string,
  data: {
    posts: unknown;
    postsList: unknown;
    latestPosts: unknown;
    album: unknown;
    isUpToDate: boolean;
  },
) {
  if (data.isUpToDate) return;

  await writePosts(data.posts, "posts.json");
  await writePosts(data.postsList, "posts-list.json");
  await writePosts(data.latestPosts, "latest-posts.json");
  await writePosts(data.album, "album.json");

  async function writePosts(data: unknown, file: string) {
    await writeFile(path.resolve(root, file), JSON.stringify(data));
  }
}
