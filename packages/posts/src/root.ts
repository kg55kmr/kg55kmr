import path from "path";
import { workspaceRoot } from "workspace-root";

export async function getRoot() {
  const root = await workspaceRoot();
  if (root === null) throw new Error("workspace root is not found");

  const postsRoot = path.resolve(root, "..", "posts");
  return postsRoot;
}
