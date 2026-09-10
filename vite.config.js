import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./test/setup.js'],
    css: false,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Separa las dependencias del código propio: al publicar cambios
        // de contenido, el navegador reutiliza el vendor ya cacheado.
        // Por nombre no funciona: el punto de entrada real es
        // react-dom/client y no lo captura. Con una función, todo lo que
        // venga de node_modules va a un único bloque cacheable.
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
})
