import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/cencora-portal/',
  build: {
    target: 'esnext',
    minify: 'esbuild',
  },
  server: {
    port: 3000,
  },
})
