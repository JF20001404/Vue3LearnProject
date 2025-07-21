import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// 给组件起名的插件
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueSetupExtend()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  // 代理服务器
  server: {
    proxy: {
      // 字符串简写写法：
      // http://localhost:5173/foo 
      // -> http://localhost:4567/foo
      '/lovetalk': 'https://api.uomg.com/api/rand.qinghua?format=json',
    },
  },
})
