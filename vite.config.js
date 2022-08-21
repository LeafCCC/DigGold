import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import markdown from 'vite-plugin-md'
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    markdown()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/css/variable.scss";'
      }
    }
  }
})
