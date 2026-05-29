import { g as getRoot, p as processPosts, w as write } from './root-CXgI_lXG.js';
import 'fs/promises';
import 'path';
import 'fdir';
import 'fs';
import 'gray-matter';
import 'workspace-root';

const root = await getRoot();
async function getPosts() {
  const data = await processPosts(root);
  write(root, data);
  return data;
}
await getPosts();

export { getPosts };
