import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      {
        root: "site",
        extends: true,
      },
      {
        root: "packages",
        extends: true,
      },
    ],
  },
});
