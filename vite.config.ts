import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@features": path.resolve(__dirname, "./src/features"),
      "@components": path.resolve(__dirname, "./src/shared/components"),
      "@icons": path.resolve(__dirname, "./src/shared/icons"),
    },
  },
});
