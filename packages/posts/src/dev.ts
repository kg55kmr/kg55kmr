import { write } from "./local";
import { processPosts } from "./process";
import { getRoot } from "./root";

export async function getPosts() {
  const root = await getRoot();
  const data = await processPosts(root);
  write(root, data);

  return data;
}
