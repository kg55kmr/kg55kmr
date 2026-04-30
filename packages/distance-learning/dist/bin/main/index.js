#!/usr/bin/env node
import crypto from 'node:crypto';
import fs, { access } from 'node:fs/promises';
import path$1 from 'node:path';
import { t as toPercent } from '../../common-C1Aj9B1F.js';
import { getLessonDate } from '../../index.js';
import path from 'path';
import { fdir } from 'fdir';

function glob(root) {
  return new fdir().withRelativePaths().filter((item) => item.split(path.sep).length === 3).crawl(root).withPromise();
}

async function parsing(years, callback) {
  let shaCount = 0;
  const cache = await readCache();
  const files = await glob("data");
  let count = 0;
  const print = (count2) => {
    callback(toPercent(count2, files.length));
  };
  const items = [];
  for (const file of files) {
    items.push(
      await transform(path$1.join("data", file), cache, () => shaCount++)
    );
    print(++count);
  }
  const classes = Object.groupBy(items, (v) => v.className);
  const result = [];
  const sortByDate = sortLessons(years);
  for (const className of Object.keys(classes).toSorted()) {
    const byClass = classes[className];
    if (byClass === void 0) continue;
    const bySubject = Object.groupBy(byClass, (v) => v.subject);
    const subjects = Object.keys(bySubject).toSorted((a, b) => a.localeCompare(b, "uk")).map((subject) => {
      if (!bySubject[subject])
        throw new Error(`No lessons: ${className}: ${subject}`);
      return {
        name: subject,
        lessons: bySubject[subject].toSorted(sortByDate)
      };
    });
    result.push({ name: className, subjects });
  }
  await writeCache(cache);
  await fs.writeFile("data/data.json", JSON.stringify(result, replacer));
  return shaCount;
}
async function readCache() {
  try {
    await fs.access("data/cache.json");
  } catch (_e) {
    return {};
  }
  return await fs.readFile("data/cache.json", "utf8").then(JSON.parse);
}
async function writeCache(cache) {
  await fs.writeFile("data/cache.json", JSON.stringify(cache), "utf8");
}
async function transform(file, cache, shaCallback) {
  const isPdf = file.endsWith(".pdf");
  const components = file.split(path$1.sep).slice(1);
  const parsedPath = path$1.parse(components[2]);
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
  const result = {
    className,
    subject,
    title,
    ext: parsedPath.ext,
    sha
  };
  return result;
}
function sortLessons(years) {
  return (a, b) => {
    const date = getLessonDate(b.title, years).getTime() - getLessonDate(a.title, years).getTime();
    if (date !== 0) return date;
    return a.title.localeCompare(b.title, "uk");
  };
}
async function sha1(file) {
  const content = await fs.readFile(file);
  const base = Buffer.from(`blob ${content.length}\0`);
  const data = Buffer.concat([base, content]);
  const result = crypto.hash("sha1", data);
  return result;
}
function replacer(k, v) {
  switch (k) {
    case "className":
    case "subject":
      return void 0;
  }
  return v;
}

async function prettify(root = "data", callback) {
  let modifiedCount = 0;
  const files = await glob(root);
  let count = 0;
  const print = (count2) => {
    callback(toPercent(count2, files.length));
  };
  callback(0);
  for (let file of files) {
    file = path$1.join(root, file);
    const parsedPath = path$1.parse(file);
    const newName = prettyName(parsedPath.name.trim());
    if (!newName.includes("\u0422\u0435\u043C\u0430."))
      throw new Error(`Missing theme: ${file}: ${newName}`);
    if (newName === parsedPath.name) {
      print(++count);
      continue;
    }
    const newPath = path$1.format({
      ...parsedPath,
      base: newName + parsedPath.ext
    });
    if (await access(newPath).then(() => true).catch(() => false))
      throw new Error(`${newPath} already exists`);
    await fs.rename(file, newPath);
    modifiedCount += 1;
    print(++count);
  }
  return modifiedCount;
}
const reTheme = /([\s\.])тема\./gi;
const reCopy = /коп[іи]я/gi;
const reDate = /^(\d\d\.\d\d)([^\.].*)/;
function prettyName(filename) {
  filename = filename.replace(reTheme, "$1\u0422\u0435\u043C\u0430.");
  filename = filename.replace(reCopy, "");
  filename = filename.replaceAll("\xAC", "");
  filename = filename.replaceAll("_", " ");
  filename = filename.replace(/\s+/g, " ");
  filename = filename.replace(/\.{2,}/g, ".");
  filename = filename.replace(/,{2,}/g, ",");
  filename = filename.replace(/\s+\./g, ".");
  filename = filename.replace(/\s+,/g, ",");
  filename = filename.replace(reDate, "$1.$2");
  filename = filename.slice(0, 5) + filename.slice(5).replace(/\.([^,\s])/g, ". $1");
  filename = filename.replace(/,(\S)/g, ", $1");
  filename = filename.replace(/\.+$/g, "");
  return filename.trim();
}

const years = process.argv[2];
if (years === void 0) throw new Error("No years specified");
const modified = await prettify(
  "data",
  (p) => process.stdout.write(`prettify: ${p}%   \r`)
);
console.log(`prettify: done (${modified})                     `);
const sha = await parsing(
  years,
  (p) => process.stdout.write(`parsing: ${p}%   \r`)
);
console.log(`parsing: done (${sha})                     `);
