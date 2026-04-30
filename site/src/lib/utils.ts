import type {
  FilesInFolder,
  StaticAssetDirectory,
  StaticAssetPath,
} from "~/static-assets";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function dirAsset<T extends StaticAssetDirectory>(dir: T) {
  function fileAsset(file: DirAsset<T>): string;
  function fileAsset(file: DirAsset<T>[]): string[];
  function fileAsset(file: DirAsset<T> | DirAsset<T>[]) {
    if (Array.isArray(file)) return file.map((f) => `/${dir}/${f}`);
    return `/${dir}/${file}`;
  }

  return fileAsset;
}

export function asset(file: StaticAssetPath) {
  return "/" + file;
}

export function filename(path: string) {
  const lastComponent = path.split("/").at(-1);
  if (!lastComponent) throw new Error("Empty path");
  const index = lastComponent.lastIndexOf(".");
  if (index === -1) return lastComponent;

  return lastComponent.slice(0, index);
}

export function filenames<T>(glob: Record<string, T>) {
  return Object.entries(glob).map(([k, v]) => ({ k: filename(k), v }));
}

export type InferFilename<R> = R extends (file: infer T) => string
  ? T
  : R extends (file: (infer T)[]) => string[]
    ? T
    : never;

type DirAsset<Dir extends "." | StaticAssetDirectory> = Dir extends "."
  ? FilesInFolder<".">
  : FilesInFolder<Dir> extends `${Dir}${infer FileName}`
    ? FileName
    : never;
