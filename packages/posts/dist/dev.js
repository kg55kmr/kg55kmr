import fs from 'fs';
import path from 'path';
import { g as getRoot, p as processPosts } from './root-BtmKWMuc.js';
import 'fs/promises';
import 'fdir';
import 'gray-matter';
import './index.js';
import 'workspace-root';

const root = await getRoot();
const { posts, postsList, latestPosts, album } = await processPosts(root);
writePosts(posts, "posts.json");
writePosts(postsList, "posts-list.json");
writePosts(latestPosts, "latest-posts.json");
writePosts(album, "album.json");
function writePosts(data, file) {
  fs.writeFileSync(path.resolve(root, file), JSON.stringify(data));
}
