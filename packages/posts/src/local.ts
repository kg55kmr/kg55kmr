import fs from "fs";
import path from "path";

export function write(
  root: string,
  data: {
    posts: unknown;
    postsList: unknown;
    latestPosts: unknown;
    album: unknown;
  },
) {
  writePosts(data.posts, "posts.json");
  writePosts(data.postsList, "posts-list.json");
  writePosts(data.latestPosts, "latest-posts.json");
  writePosts(data.album, "album.json");

  function writePosts(data: unknown, file: string) {
    fs.writeFileSync(path.resolve(root, file), JSON.stringify(data));
  }
}
