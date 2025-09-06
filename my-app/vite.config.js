import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      cesium: resolve("node_modules/cesium/Source"),
    },
  },
  build: {
    rollupOptions: {
      external: ["cesium"],
    },
  },
});