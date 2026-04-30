#!/usr/bin/env node
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import { deleteEmpty } from '@hyperse/delete-empty-folders';
import { fdir } from 'fdir';
import { t as toPercent } from '../../common-C1Aj9B1F.js';

const convertedDir = "converted";
const compressedDir = "compressed";

const root$1 = path.resolve("/downloads", convertedDir);
const out = path.resolve(root$1, "out.pdf");
async function compress(callback) {
  const files = await new fdir().filter((path2) => path2.endsWith(".pdf")).withRelativePaths().crawl(root$1).withPromise();
  let count = 0;
  const print = (count2) => {
    callback(toPercent(count2, files.length));
  };
  print(0);
  for (const file of files) {
    const src = path.resolve(root$1, file);
    let dst = path.resolve(root$1, compressedDir, file);
    dst = dst.split(path.sep).filter((v) => v !== convertedDir).join(path.sep);
    if (existsSync(out)) throw new Error("out.pdf already exists");
    await fs.mkdir(path.dirname(dst), { recursive: true });
    execFileSync("gswin64c", [
      "-sDEVICE=pdfwrite",
      "-dPDFSETTINGS=/screen",
      "-dNOPAUSE",
      "-dQUIET",
      "-dBATCH",
      `-sOutputFile=${out}`,
      src
    ]);
    await fs.rename(out, dst);
    await fs.rm(src);
    print(++count);
  }
  await deleteEmpty(path.resolve("/downloads"));
  return files.length;
}

const root = "/downloads";
const convertor = path.resolve(import.meta.dirname, "../../bin/docto.exe");
async function convert(callback) {
  let convertedCount = 0;
  const files = await new fdir().withRelativePaths().filter((p) => !p.startsWith(convertedDir)).filter((p) => !p.startsWith(compressedDir)).filter((p) => !p.startsWith("_")).crawl(root).withPromise();
  let count = 0;
  const print = (count2) => {
    callback(toPercent(count2, files.length));
  };
  print(0);
  for (const file of files) {
    const src = path.resolve(root, file);
    const dst = path.resolve(root, convertedDir, file);
    const dstCompressed = path.resolve(root, compressedDir, file);
    const dstPdf = path.format({ ...path.parse(dst), base: "", ext: ".pdf" });
    const docArgs = ["-WD", "-f", src, "-o", dstPdf, "-t", "wdFormatPDF"];
    const pptArgs = ["-PP", "-f", src, "-o", dstPdf, "-t", "ppSaveAsPDF"];
    let ignoreSize = false;
    let args;
    switch (path.extname(src).toLowerCase()) {
      case ".doc":
      case ".docm":
        ignoreSize = true;
        args = docArgs;
        break;
      case ".docx":
        args = docArgs;
        break;
      case ".ppt":
        ignoreSize = true;
        args = pptArgs;
        break;
      case ".pptx":
      case ".pptm":
        args = pptArgs;
        break;
    }
    await fs.mkdir(path.dirname(dst), { recursive: true });
    const { size } = await fs.stat(src);
    switch (true) {
      case (size < 1048576 && !ignoreSize):
        await fs.mkdir(path.dirname(dstCompressed), { recursive: true });
        await fs.rename(src, dstCompressed);
        break;
      case args !== void 0: {
        const r = execFileSync(convertor, args).toString();
        if (r.includes("Error")) throw new Error(`Converting failed: ${src}`);
        await fs.rm(src);
        convertedCount++;
        break;
      }
      default:
        await fs.rename(src, dst);
    }
    print(++count);
  }
  return convertedCount;
}

const converted = await convert(
  (p) => process.stdout.write(`converting: ${p}%   \r`)
);
console.log(`converting: done (${converted})        `);
const compressed = await compress(
  (p) => process.stdout.write(`compressing: ${p}%   \r`)
);
console.log(`compressing: done (${compressed})            `);
