// const path = require('path')

// export default {
//   root: path.resolve(__dirname, 'src'),
//   server: {
//     // port: 8080,
//     hot: true
//   }
// }


import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [vue()],
  plugins: [vue(), 'vue-ssr-carousel'],
  // plugins: [vue(), BootstrapVue(), IconsPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
