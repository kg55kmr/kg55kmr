import type { FullPosts, Post } from "./types";
import { existsSync, readFileSync } from "fs";
import { readFile, stat } from "fs/promises";
import path from "path";
import matter from "gray-matter";

type CacheItem = {
  full: Post;
  type: string;
  id: string;
  filePath: string;
};

export class Cache {
  private cache: FullPosts = {};
  private root: string;

  isUpToDate = true;

  constructor(root: string) {
    this.root = root;
    const cachePath = path.join(root, "posts.json");

    if (existsSync(cachePath)) {
      const data = readFileSync(cachePath, "utf8");
      this.cache = JSON.parse(data);
    }
  }

  async get(item: string): Promise<CacheItem> {
    const type = path.basename(path.dirname(item));
    const id = path.basename(item.trim());
    const filePath = path.join(this.root, `${type}/${id}/index.md`);
    const itemStats = await stat(filePath);
    const cachedItem = this.cache[type]?.[id] as Post | undefined;

    if (cachedItem?.mtimeMs === itemStats.mtimeMs)
      return { full: cachedItem, type, id, filePath };

    this.isUpToDate = false;

    const fileContent = await readFile(filePath, "utf8");
    const { data, content } = matter(fileContent);

    const title: string = data["title"];
    const pin: boolean | undefined = data["pin"];

    const [year, month, day] = id.split("-").map(Number);
    const date = { year, month, day };

    const noThumbnail =
      (type === "news" && new Date(year, month - 1, day) < dateNoThumbnail) ||
      undefined;

    return {
      full: {
        title,
        date,
        pin,
        content,
        noThumbnail,
        mtimeMs: itemStats.mtimeMs,
      },
      type,
      id,
      filePath,
    };
  }
}

const dateNoThumbnail = new Date(2016, 11, 27);
