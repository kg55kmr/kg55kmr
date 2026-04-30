import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { expect, test } from "vitest";
import { prettify, prettyName } from "./prettify";
import { tmpdirTest } from "./tmpdir";

test("prettyName", () => {
  const r = prettyName(
    "01.01 12345.Тема.___123  ¬ ,abc система. копия Копія...",
  );
  expect(r).toBe("01.01. 12345. Тема. 123, abc система.");
});

tmpdirTest("prettify error if exist", async ({ tmpdir }) => {
  const root = path.join(tmpdir, "data", "1");
  await mkdir(root, { recursive: true });
  await writeFile(path.join(root, "01.01. Тема.test.docx"), "data", "utf8");
  await writeFile(path.join(root, "01.01   Тема.test.docx"), "data", "utf8");
  await expect(prettify(tmpdir, () => {})).rejects.toThrow();
});

tmpdirTest("prettify should not error", async ({ tmpdir }) => {
  const root = path.join(tmpdir, "data", "1");
  await mkdir(root, { recursive: true });
  await writeFile(path.join(root, "01.01   Тема.test.docx"), "data", "utf8");
  await prettify(tmpdir, () => {});
});
