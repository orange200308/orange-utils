import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.json', '.ts']
  }
})
