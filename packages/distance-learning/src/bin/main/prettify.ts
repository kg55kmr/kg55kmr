import fs, { access } from "node:fs/promises";
import path from "node:path";
import { toPercent } from "../../common";
import { glob } from "./glob.js";

export async function prettify(
  root: string = "data",
  callback: (n: number) => void,
) {
  let modifiedCount = 0;

  const files = await glob(root);
  let count = 0;

  const print = (count: number) => {
    callback(toPercent(count, files.length));
  };

  callback(0);

  for (let file of files) {
    file = path.join(root, file);
    const parsedPath = path.parse(file);
    const newName = prettyName(parsedPath.name.trim());

    if (!newName.includes("Тема."))
      throw new Error(`Missing theme: ${file}: ${newName}`);

    if (newName === parsedPath.name) {
      print(++count);
      continue;
    }

    const newPath = path.format({
      ...parsedPath,
      base: newName + parsedPath.ext,
    });

    if (
      await access(newPath)
        .then(() => true)
        .catch(() => false)
    )
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

export function prettyName(filename: string) {
  filename = filename.replace(reTheme, "$1Тема."); // case insensitive theme replace
  filename = filename.replace(reCopy, ""); // case insensitive copy replace
  filename = filename.replaceAll("¬", ""); // remove new line;
  filename = filename.replaceAll("_", " "); // replace underscore with space
  filename = filename.replace(/\s+/g, " "); // replace multiple spaces with single one
  filename = filename.replace(/\.{2,}/g, "."); // remove multiple dots
  filename = filename.replace(/,{2,}/g, ","); // remove multiple commas
  filename = filename.replace(/\s+\./g, "."); // remove spaces before dot
  filename = filename.replace(/\s+,/g, ","); // remove spaces before comma
  filename = filename.replace(reDate, "$1.$2");
  filename =
    filename.slice(0, 5) + filename.slice(5).replace(/\.([^,\s])/g, ". $1"); // add space after dot (skipping date)
  filename = filename.replace(/,(\S)/g, ", $1"); // add space after comma
  filename = filename.replace(/\.+$/g, "");

  return filename.trim();
}
