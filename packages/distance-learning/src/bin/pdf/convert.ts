import { execFileSync } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { fdir } from "fdir";
import { toPercent } from "../../common";
import { compressedDir, convertedDir } from "./dirs";

const root = "/downloads";
const convertor = path.resolve(import.meta.dirname, "../../bin/docto.exe");

export async function convert(callback: (n: number) => void) {
  let convertedCount = 0;

  const files = await new fdir()
    .withRelativePaths()
    .filter((p) => !p.startsWith(convertedDir))
    .filter((p) => !p.startsWith(compressedDir))
    .filter((p) => !p.startsWith("_"))
    .crawl(root)
    .withPromise();

  let count = 0;
  const print = (count: number) => {
    callback(toPercent(count, files.length));
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
      case size < 1048576 && !ignoreSize:
        await fs.mkdir(path.dirname(dstCompressed), { recursive: true });
        await fs.rename(src, dstCompressed);
        break;

      case args !== undefined: {
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
