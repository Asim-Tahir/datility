/// <reference types="vitest" />

import { defineConfig, loadEnv } from "vite";
import { fileURLToPath, URL } from "url";

export default defineConfig(({ mode }) => {
  // Get only have VITE_ prefix env variables
  process.env = {
    ...process.env,
    ...loadEnv(mode, fileURLToPath(new URL(".", import.meta.url)), "VITE_"),
  };

  return {
    build: {
      rollupOptions: {
        preserveEntrySignatures: "allow-extension",
        input: ["src/index.ts"],
        output: [
          {
            entryFileNames: "[name].[format].js",
            format: "es",
            preserveModules: true,
          },
          {
            entryFileNames: "[name].[format].js",
            format: "cjs",
            preserveModules: true,
          },
          {
            entryFileNames: "[name].[format].js",
            format: "iife",
          },
          {
            entryFileNames: "[name].[format].js",
            format: "umd",
          },
        ],
      },
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    // https://vitest.dev/config/#configuring-vitest
    test: {
      globals: true,
      coverage: {
        all: true,
        functions: 95,
        lines: 95,
        statements: 95,
        branches: 95,
        excludeNodeModules: true,

        include: ["src"],
        exclude: ["src/manipulate/index.ts"],
        clean: true,
      },
    },
  };
});
