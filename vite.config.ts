import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/cinematic-microclimate/',
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/posters': 'http://127.0.0.1:8000',
      '/tmdbimg': 'http://127.0.0.1:8000',
      '/douban-link': 'http://127.0.0.1:8000',
    }
  }
})
