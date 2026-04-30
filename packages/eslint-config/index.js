import eslint from "@eslint/js";
import router from "@tanstack/eslint-plugin-router";
import perfectionist from "eslint-plugin-perfectionist";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import { reactRefresh } from "eslint-plugin-react-refresh";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  router.configs["flat/recommended"],
  reactHooks.configs.flat["recommended-latest"],
  reactRefresh.configs.vite({
    extraHOCs: [
      "createFileRoute",
      "createRootRouteWithContext",
      "withClientOnly",
      "withClientOnlySuspense",
      "createLink",
    ],
  }),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    rules: { "react-hooks/todo": "error" },
  },
  {
    plugins: { react },
    rules: {
      "react/jsx-key": ["error", { checkFragmentShorthand: true }],
    },
  },
  {
    plugins: { perfectionist },
    rules: {
      "perfectionist/sort-imports": [
        "error",
        {
          type: "natural",
          sortSideEffects: true,
          newlinesBetween: 0,
          groups: [
            "type",
            "builtin",
            "external",
            "internal",
            "parent",
            "side-effect",
            "style",
            "side-effect-style",
          ],
        },
      ],
      "perfectionist/sort-jsx-props": [
        "error",
        {
          type: "unsorted",
          newlinesBetween: 0,
          groups: ["key", "ref", "unknown", "style", "class"],
          customGroups: [
            {
              groupName: "class",
              elementNamePattern: "[cC]lassName$",
              type: "natural",
              order: "desc",
            },
            { groupName: "style", elementNamePattern: "style$" },
            { groupName: "key", elementNamePattern: "^key$" },
            { groupName: "ref", elementNamePattern: "ref$" },
          ],
        },
      ],
      "perfectionist/sort-named-imports": [
        "error",
        { type: "natural", groups: ["type-import", "value-import"] },
      ],
      "perfectionist/sort-exports": ["error", { type: "natural" }],
      "perfectionist/sort-named-exports": ["error", { type: "natural" }],
    },
  },
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    ignores: [
      "**/node_modules/",
      "content",
      "**/dist/",
      "**/.*/",
      "sites/main/*",
    ],
  },
);
