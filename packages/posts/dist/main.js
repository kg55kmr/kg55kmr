import { Redis } from '@upstash/redis';
import fs, { readFile } from 'fs/promises';
import path from 'path';
import { fdir } from 'fdir';
import matter from 'gray-matter';
import _ from 'lodash';
import { extractSlideshows } from './index.js';
import { workspaceRoot } from 'workspace-root';
import { ImageKit } from '@imagekit/nodejs';
import { PromisePool } from '@supercharge/promise-pool';

async function processPosts(root) {
  const dirs = await new fdir().onlyDirs().withRelativePaths().exclude((d) => d.startsWith(".")).filter((p) => p.split(path.sep).length === 3).crawl(root).withPromise();
  const posts = await Promise.all(
    dirs.map(async (item) => {
      const { data, content } = matter(
        await readFile(path.resolve(root, item, "index.md"), "utf8")
      );
      item = item.replaceAll("\\", "/");
      const kind = path.basename(path.dirname(item));
      const id = path.basename(item.trim());
      const sortId = data["id"] ? data["id"] : id;
      const title = data["title"];
      const pin = data["pin"] !== void 0 ? true : void 0;
      const idParts = sortId.split("-");
      const year = Number.parseInt(idParts[0]);
      const month = Number.parseInt(idParts[1]) - 1;
      const day = Number.parseInt(idParts[2]);
      const slideshows = extractSlideshows(kind, id, content);
      return {
        kind,
        id,
        sortId,
        title,
        pin,
        year,
        month,
        day,
        slideshows
      };
    })
  );
  posts.sort(
    (a, b) => b.sortId.localeCompare(a.sortId, void 0, { numeric: true })
  );
  const album = posts.filter((post) => post.kind === "news" && post.slideshows.length > 0).map((post) => ({ ...post }));
  posts.forEach((p) => {
    delete p.sortId;
    delete p.slideshows;
  });
  const groupedPosts = _(posts).groupBy((v) => v.kind).mapValues((p) => {
    const result = _.groupBy(p, (p2) => p2.pin ? "pin" : "items");
    if (!("pin" in result)) result["pin"] = [];
    return result;
  }).mapValues(({ items, pin }) => ({
    items,
    pin
  })).value();
  const latestPosts = _.mapValues(groupedPosts, ({ items, pin }) => ({
    items: items.slice(0, 5),
    pin
  }));
  return {
    posts: groupedPosts,
    latestPosts,
    album
  };
}

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
const { posts, latestPosts, album } = await processPosts(root);
const redis = Redis.fromEnv();
const pipeline = redis.pipeline();
pipeline.json.set("posts", "$", posts);
pipeline.json.set("latest-posts", "$", latestPosts);
pipeline.json.set("album", "$", album);
await pipeline.exec();
