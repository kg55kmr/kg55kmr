import type { Class, Lesson } from "./types";
import crypto from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { toPercent } from "../../common";
import { getLessonDate } from "./getLessonDate";
import { glob } from "./glob.js";

type Cache = Record<string, string | undefined>;

type LessonExt = {
  className: string;
  subject: string;
} & Lesson;

export async function parsing(years: string, callback: (n: number) => void) {
  let shaCount = 0;
  const cache = await readCache();
  const files = await glob("data");

  let count = 0;

  const print = (count: number) => {
    callback(toPercent(count, files.length));
  };

  const items: LessonExt[] = [];
  for (const file of files) {
    items.push(
      await transform(path.join("data", file), cache, () => shaCount++),
    );
    print(++count);
  }

  const classes = Object.groupBy(items, (v) => v.className);
  const result: Class[] = [];

  const sortByDate = sortLessons(years);
  for (const className of Object.keys(classes).toSorted()) {
    const byClass = classes[className];
    if (byClass === undefined) continue;

    const bySubject = Object.groupBy(byClass, (v) => v.subject);
    const subjects = Object.keys(bySubject)
      .toSorted((a, b) => a.localeCompare(b, "uk"))
      .map((subject) => {
        if (!bySubject[subject])
          throw new Error(`No lessons: ${className}: ${subject}`);
        return {
          name: subject,
          lessons: bySubject[subject].toSorted(sortByDate),
        };
      });

    result.push({ name: className, subjects });
  }

  await writeCache(cache);
  await fs.writeFile("data/data.json", JSON.stringify(result, replacer));

  return shaCount;
}

async function readCache(): Promise<Cache> {
  try {
    await fs.access("data/cache.json");
  } catch (_e) {
    return {};
  }

  return await fs.readFile("data/cache.json", "utf8").then(JSON.parse);
}

async function writeCache(cache: Cache) {
  await fs.writeFile("data/cache.json", JSON.stringify(cache), "utf8");
}

async function transform(file: string, cache: Cache, shaCallback: () => void) {
  const isPdf = file.endsWith(".pdf");
  const components = file.split(path.sep).slice(1);
  const parsedPath = path.parse(components[2]);
  const title = parsedPath.name.trim();
  const className = components[0];
  const subject = components[1];

  if (isPdf) return { className, subject, title };

  let sha = cache[file];
  if (!sha) {
    sha = await sha1(file);
    cache[file] = sha;
    shaCallback();
  }

  const result: LessonExt = {
    className,
    subject,
    title,
    ext: parsedPath.ext,
    sha,
  };

  return result;
}

export function sortLessons(years: string) {
  return (a: Lesson, b: Lesson) => {
    const date =
      getLessonDate(b.title, years).getTime() -
      getLessonDate(a.title, years).getTime();

    if (date !== 0) return date;

    return a.title.localeCompare(b.title, "uk");
  };
}

async function sha1(file: string) {
  const content = await fs.readFile(file);
  const base = Buffer.from(`blob ${content.length}\0`);
  const data = Buffer.concat([base, content]);
  const result = crypto.hash("sha1", data);
  return result;
}

function replacer(k: string, v: unknown) {
  switch (k) {
    case "className":
    case "subject":
      return undefined;
  }

  return v;
}
