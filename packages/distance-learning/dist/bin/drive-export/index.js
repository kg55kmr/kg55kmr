#!/usr/bin/env node
import { existsSync, createWriteStream, renameSync } from 'fs';
import path from 'path';
import { Readable } from 'stream';
import { pipeline } from 'stream/promises';
import clipboard from 'clipboardy';
import { parse } from 'node-html-parser';

const root = path.resolve("/downloads");
const clipboardData = await clipboard.read();
const urls = clipboardData.split("\n").filter((v) => v != "");
let count = urls.length;
const tempPath = path.resolve(root, "download.data");
const progress = (size = "") => process.stdout.write(`${count}: ${size}         \r`);
const re = /[:?]/g;
for (const url of urls) {
  const { filename, url: downloadUrl } = await get(url);
  progress();
  const outFile = path.resolve(root, filename.replaceAll(re, ""));
  if (existsSync(outFile)) continue;
  const resp = await checkIfBigFile(downloadUrl);
  const contentLength = resp.headers.get("content-length");
  const size = contentLength ? `${toMB(contentLength)} MB` : "no content-length";
  progress(size);
  if (resp.ok && resp.body) {
    const writer = createWriteStream(tempPath);
    const reader = Readable.fromWeb(resp.body);
    await pipeline(reader, writer);
    renameSync(tempPath, outFile);
    count--;
  }
}
async function get(link) {
  const url = link.split("?")[0].split("/").slice(0, -1).join("/");
  const name = await getFilename(url);
  if (name === void 0) throw new Error(`${url} cannot get name`);
  switch (true) {
    case link.startsWith("https://docs.google.com/presentation"):
      return { url: `${url}/export/pptx`, filename: name + ".pptx" };
    case link.startsWith("https://docs.google.com/document"):
      return {
        url: `${url}/export?format=doc`,
        filename: name + ".docx"
      };
    case link.startsWith("https://drive.google.com/file/d"): {
      const id = link.split("?")[0].split("/").slice(-2)[0];
      return {
        url: `https://drive.google.com/uc?export=download&id=${id}`,
        filename: name
      };
    }
    default:
      throw new Error(`${link} is unknown`);
  }
}
function toMB(contentLength) {
  return Math.trunc(Number.parseInt(contentLength) / 1024 / 1024);
}
async function getFilename(url) {
  const resp = await fetch(url);
  const body = await resp.text();
  const p = parse(body);
  const name = p.querySelector("meta[property='og:title']")?.attrs["content"];
  return name;
}
async function checkIfBigFile(url) {
  const resp = await fetch(url);
  if (!resp.headers.get("content-type")?.includes("text/html")) return resp;
  const id = URL.parse(resp.url)?.searchParams.get("id");
  const body = await resp.text();
  const p = parse(body);
  const uuid = p.querySelector("input[name='uuid']")?.attrs["value"];
  return fetch(
    `https://drive.usercontent.google.com/download?id=${id}&confirm=t&uuid=${uuid}`
  );
}
