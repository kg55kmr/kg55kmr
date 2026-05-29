import { write } from "./local";
import { processPosts } from "./process";
import { getRoot } from "./root";

const root = await getRoot();

export async function getPosts() {
  const data = await processPosts(root);
  write(root, data);

  return data;
}

await getPosts();
