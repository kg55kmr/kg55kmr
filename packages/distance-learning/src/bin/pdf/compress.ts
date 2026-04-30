import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { deleteEmpty } from "@hyperse/delete-empty-folders";
import { fdir } from "fdir";
import { toPercent } from "../../common";
import { compressedDir, convertedDir } from "./dirs";

const root = path.resolve("/downloads", convertedDir);
const out = path.resolve(root, "out.pdf");

export async function compress(callback: (n: number) => void) {
  const files = await new fdir()
    .filter((path) => path.endsWith(".pdf"))
    .withRelativePaths()
    .crawl(root)
    .withPromise();

  let count = 0;
  const print = (count: number) => {
    callback(toPercent(count, files.length));
  };

  print(0);

  for (const file of files) {
    const src = path.resolve(root, file);
    let dst = path.resolve(root, compressedDir, file);
    dst = dst
      .split(path.sep)
      .filter((v) => v !== convertedDir)
      .join(path.sep);

    if (existsSync(out)) throw new Error("out.pdf already exists");

    await fs.mkdir(path.dirname(dst), { recursive: true });

    execFileSync("gswin64c", [
      "-sDEVICE=pdfwrite",
      "-dPDFSETTINGS=/screen",
      "-dNOPAUSE",
      "-dQUIET",
      "-dBATCH",
      `-sOutputFile=${out}`,
      src,
    ]);

    await fs.rename(out, dst);
    await fs.rm(src);

    print(++count);
  }

  await deleteEmpty(path.resolve("/downloads"));
  return files.length;
}
