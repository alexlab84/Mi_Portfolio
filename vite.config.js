import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Mi_Portfolio/', // 👈 Asegura que coincide con el nombre del repo
  build: {
    outDir: 'dist',
  },
});

