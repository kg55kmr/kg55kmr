import type { GroupedPosts } from "./types";
import fs from "fs";
import path from "path";
import { workspaceRoot } from "workspace-root";
import { processPosts } from "./process";
import { uploadImages } from "./upload-images";

const root =
  (await workspaceRoot()) ?? throwExpression("workspace root is not found");
const postsRoot = path.resolve(root, "..", "posts");

await uploadImages(postsRoot);

const { posts, latestPosts, album } = await processPosts(postsRoot);

writePostTypes(posts);
writePosts(posts, "posts.json");
writePosts(latestPosts, "latest-posts.json");
writePosts(album, "album.json");

function writePosts(data: unknown, file: string) {
  fs.writeFileSync(path.resolve(postsRoot, file), JSON.stringify(data));
}

function writePostTypes(posts: GroupedPosts) {
  const union = Object.keys(posts)
    .map((p) => `"${p}"`)
    .join(" | ");

  fs.writeFileSync(
    path.resolve(root, "packages/posts/src", "post-type.gen.ts"),
    `export type PostType = ${union};\n`,
  );
}

function throwExpression(errorMessage: string): never {
  throw new Error(errorMessage);
}
