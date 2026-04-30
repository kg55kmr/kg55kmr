import path from "path";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";
import staticAssets from "vite-static-assets-plugin";

export default defineConfig(({ mode }) => {
  const isDev = mode === "development";
  const postsRoot = path.resolve("../../posts");
  return {
    server: {
      port: 3000,
      host: true,
      fs: {
        allow: [searchForWorkspaceRoot(process.cwd()), postsRoot],
      },
    },
    resolve: {
      tsconfigPaths: true,
    },
    define: {
      __POSTS_FS__: isDev ? JSON.stringify(`/@fs/${postsRoot}`) : undefined,
    },
    plugins: [
      tailwindcss(),
      staticAssets(),
      tanstackStart(),
      nitro({
        // TODO: remove
        devProxy: {
          "/src/routes/**/*.jpg": "http://localhost:3000/@fs",
          "/src/routes/**/*.png": "http://localhost:3000/@fs",
          "/src/routes/**/*.pdf": "http://localhost:3000/@fs",
        },
      }),
      react(),
      babel({ presets: [reactCompilerPreset()] }),
    ],
  };
});
