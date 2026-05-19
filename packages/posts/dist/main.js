import { Redis } from '@upstash/redis';
import fs, { readFile } from 'fs/promises';
import path from 'path';
import { fdir } from 'fdir';
import matter from 'gray-matter';
import { extractSlideshows } from './index.js';
import { workspaceRoot } from 'workspace-root';
import { ImageKit } from '@imagekit/nodejs';
import { PromisePool } from '@supercharge/promise-pool';

async function processPosts(root) {
  const dirs = await new fdir().onlyDirs().withRelativePaths().exclude((d) => d.startsWith(".")).filter((p) => p.split(path.sep).length === 3).crawl(root).withPromise();
  const posts = await Promise.all(
    dirs.map(async (item) => {
      const file = await readFile(path.resolve(root, item, "index.md"), "utf8");
      const { data, content } = matter(file);
      const kind = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const sortId = data["id"] ?? id;
      const [year, month, day] = sortId.split("-").map(Number);
      return {
        kind,
        id,
        sortId,
        title: data["title"],
        pin: data["pin"] || void 0,
        year,
        month: month - 1,
        day,
        slideshows: extractSlideshows(kind, id, content),
        thumbnail: void 0,
        content
      };
    })
  );
  posts.sort(
    (a, b) => b.sortId.localeCompare(a.sortId, void 0, { numeric: true })
  );
  const postsList = {};
  const fullPosts = {};
  for (const post of posts) {
    postsList[post.kind] ??= { items: [], pinItems: [] };
    const target = post.pin ? postsList[post.kind].pinItems : postsList[post.kind].items;
    target.push(post);
    fullPosts[post.kind] ??= {};
    fullPosts[post.kind][post.id] = post;
  }
  if (postsList["news"])
    for (const post of postsList["news"].items.slice(-363)) {
      post.thumbnail = false;
    }
  const latestPosts = {};
  for (const [kind, group] of Object.entries(postsList)) {
    latestPosts[kind] = {
      items: group.items.slice(0, 5),
      pinItems: group.pinItems
    };
  }
  const album = posts.filter((post) => post.kind === "news" && post.slideshows.length > 0).map((post) => post);
  return {
    posts: fullPosts,
    postsList,
    latestPosts,
    album
  };
}

const replacers = {
  posts: ["kind", "id", "sortId", "pin", "slideshows"],
  postsList: ["kind", "sortId", "slideshows", "content"],
  album: ["kind", "sortId", "pin", "content"]
};

async function getRoot() {
  const root = await workspaceRoot();
  if (root === null) throw new Error("workspace root is not found");
  const postsRoot = path.resolve(root, "..", "posts");
  return postsRoot;
}

const imagekit = new ImageKit({
  privateKey: process.env["IMAGEKIT_PRIVATE_KEY"]
});
async function uploadImages(root) {
  const dirs = await new fdir().onlyDirs().withRelativePaths().filter((p) => p.split(path.sep).length === 4).exclude((d) => d.startsWith(".")).crawl(root).withPromise();
  for (const dir of dirs) {
    const [kind, date, id] = dir.split(path.sep);
    let finalId;
    switch (true) {
      case id === "_":
        finalId = date;
        break;
      case id.startsWith("_"):
        finalId = `${date}-${id.slice(1)}`;
        break;
    }
    const remotePath = ["posts", kind, finalId].join("/");
    const localPath = path.resolve(root, dir);
    await uploadFiles(localPath, remotePath);
    await fs.rm(localPath, { recursive: true, force: true });
  }
}
async function uploadFiles(localPath, remotePath) {
  const localImages = await fs.readdir(localPath);
  const total = localImages.length;
  let count = 0;
  printUpload(localPath, 0, total);
  const inc = () => ++count;
  await PromisePool.withConcurrency(5).for(localImages).process(async (image) => {
    const data = await fs.readFile(`${localPath}/${image}`);
    await imagekit.files.upload({
      file: data.toString("base64"),
      fileName: image,
      folder: remotePath,
      useUniqueFileName: false
    }).catch(console.error);
    printUpload(localPath, inc(), total);
  });
  printUpload(localPath, 0, 0);
}
function printUpload(localPath, count, total) {
  const base = `upload (${localPath}):`;
  if (total === 0) {
    console.log(`${base} done`);
    return;
  }
  const percent = Math.trunc(count / total * 100);
  process.stdout.write(`${base} ${percent}%   \r`);
}

const root = await getRoot();
await uploadImages(root);
const { posts, postsList, latestPosts, album } = await processPosts(root);
const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", filterKeys(posts, replacers.posts));
pipeline.json.set(
  "posts-list",
  "$",
  filterKeys(postsList, replacers.postsList)
);
pipeline.json.set(
  "latest-posts",
  "$",
  filterKeys(latestPosts, replacers.postsList)
);
pipeline.json.set("album", "$", filterKeys(album, replacers.album));
await pipeline.exec();
function filterKeys(value, exclude) {
  const e = new Set(exclude);
  return JSON.parse(
    JSON.stringify(value, (key, value2) => {
      if (e.has(key)) return void 0;
      return value2;
    })
  );
}
