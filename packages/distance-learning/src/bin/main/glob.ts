import path from "path";
import { fdir } from "fdir";

export function glob(root: string) {
  return new fdir()
    .withRelativePaths()
    .filter((item) => item.split(path.sep).length === 3)
    .crawl(root)
    .withPromise();
}
