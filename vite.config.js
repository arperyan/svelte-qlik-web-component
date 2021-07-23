import { svelte } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";
const { resolve } = require("path");

// https://vitejs.dev/config/
module.exports = {
  plugins: [svelte({ compilerOptions: { customElement: true } })],
  resolve: {
    browser: true,
    dedupe: ["svelte"],
  },
  server: {
    port: 8090,
  },
  publicDir: "public/",
  build: {
    manifest: true,
    sourcemap: true,
    assetsDir: "main",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        sourcemap: true,
        format: "es",
        name: "app",
        dir: "public/resources",
      },
    },
  },
};
