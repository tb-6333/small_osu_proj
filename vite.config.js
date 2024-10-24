import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,  // This exposes the server to the local network
    port: 3000,  // You can set any port number you prefer
  },base: '/small_osu_proj/',
})