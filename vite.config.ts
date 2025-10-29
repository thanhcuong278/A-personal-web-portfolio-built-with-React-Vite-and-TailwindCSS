import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  base: '/A-personal-web-portfolio-built-with-React-Vite-and-TailwindCSS/', // 👈 Thêm dòng này
  server: {
    port: 5173,
    open: true,
  },
});
