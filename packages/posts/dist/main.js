#!/usr/bin/env node
import fs$1 from 'fs';
import path from 'path';
import { workspaceRoot } from 'workspace-root';
import fs, { readFile, access } from 'fs/promises';
import { fdir } from 'fdir';
import matter from 'gray-matter';
import _ from 'lodash';
import { extractSlideshows } from './index.js';
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
      const titleLower = title.toLowerCase();
      const pin = data["pin"] !== void 0;
      const [year, month, day] = sortId.split("-");
      const date = { year, month, day };
      const slideshows = extractSlideshows(kind, id, content);
      let thumbnailExists = true;
      await access(path.resolve(root, item, "thumbnail.jpg")).catch(
        () => thumbnailExists = false
      );
      return {
        kind,
        id,
        sortId,
        title,
        titleLower,
        pin,
        date,
        thumbnailExists,
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

const root = await workspaceRoot() ?? throwExpression("workspace root is not found");
const postsRoot = path.resolve(root, "..", "posts");
await uploadImages(postsRoot);
const { posts, latestPosts, album } = await processPosts(postsRoot);
writePostTypes(posts);
writePosts(posts, "posts.json");
writePosts(latestPosts, "latest-posts.json");
writePosts(album, "album.json");
function writePosts(data, file) {
  fs$1.writeFileSync(path.resolve(postsRoot, file), JSON.stringify(data));
}
function writePostTypes(posts2) {
  const union = Object.keys(posts2).map((p) => `"${p}"`).join(" | ");
  fs$1.writeFileSync(
    path.resolve(root, "packages/posts/src", "post-type.gen.ts"),
    `export type PostType = ${union};
`
  );
}
function throwExpression(errorMessage) {
  throw new Error(errorMessage);
}
