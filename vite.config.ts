import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS()
  ],
  assetsInclude: [
    "**/*.MP3"
  ],
  server: {
    host: '0.0.0.0',
    port: 8556,
  },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html")
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './'
})
