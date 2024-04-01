import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: '/src',
      },
      { find: '@view', replacement: '/src/components' },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
});
