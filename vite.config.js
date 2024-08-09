import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "src",
  base: "/travel-journal/",
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    assetsInlineLimit: 0,
  },
})
