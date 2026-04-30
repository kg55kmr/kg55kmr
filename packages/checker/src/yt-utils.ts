import fs from "fs/promises";
import path from "path";
import { fdir } from "fdir";
import z from "zod";

export async function checkVideoStatus(ids: string[], apiKey: string) {
  const idsParam = ids.join(",");
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${idsParam}&key=${apiKey}&part=status`;
  const base = "https://www.youtube.com/watch?v=";

  try {
    const response = await fetch(url)
      .then((r) => r.json())
      .then(parse.parse);

    const foundIds = new Set(response.items.map((item) => item.id));

    return ids
      .map((id) => ({
        ok: foundIds.has(id),
        url: base + id,
      }))
      .flat();
  } catch (error) {
    console.error(`Помилка при перевірці: ${error}`);
    return [];
  }
}

const exts = [".md", ".ts", ".tsx"];

export async function getYouTubeIds(root: string) {
  const items = await new fdir()
    .withBasePath()
    .filter((v) => {
      const parsedPath = path.parse(v);
      return exts.includes(parsedPath.ext);
    })
    .crawl(root)
    .withPromise();
  return Promise.all(
    items.map(async (v) => {
      const data = await fs.readFile(v, "utf8");
      return data
        .matchAll(reYouTube)
        .map((v) => v[1])
        .toArray();
    }),
  ).then((v) => v.flat());
}

const parse = z.object({ items: z.object({ id: z.string() }).array() });

const reYouTube = /<youtube\s+(?:id|videoId)="([^"]+)"/gi;
