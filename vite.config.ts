import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  // Served from a GitHub Pages project subpath:
  // https://kranthisai07.github.io/Website-Data-Artisans/
  base: '/Website-Data-Artisans/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
