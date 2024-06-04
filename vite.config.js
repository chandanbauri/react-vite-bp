import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
const IMAGE_QUALITY = 60;
export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      png: {
        quality: IMAGE_QUALITY,
      },
      jpeg: {
        quality: IMAGE_QUALITY,
      },
      jpg: {
        quality: IMAGE_QUALITY,
      },
      tiff: {
        quality: IMAGE_QUALITY,
      },
      gif: {},
      webp: {
        lossless: true,
      },
    }),
  ],
});
