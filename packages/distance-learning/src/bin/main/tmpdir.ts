import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "vitest";

interface TmpDirFixture {
  tmpdir: string;
}

async function createTempDir() {
  const ostmpdir = os.tmpdir();
  const tmpdir = path.join(ostmpdir, "unit-test-");
  return await fs.mkdtemp(tmpdir);
}

export const tmpdirTest = test.extend<TmpDirFixture>({
  // eslint-disable-next-line no-empty-pattern
  tmpdir: async ({}, call) => {
    const directory = await createTempDir();

    await call(directory);
    await fs.rm(directory, { recursive: true });
  },
});
