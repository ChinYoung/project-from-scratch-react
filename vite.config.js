import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react({
    babel: {
      plugins: ['@babel/plugin-transform-react-jsx', '@babel/plugin-syntax-jsx'],
    },
  })],
  base: '/libra',
  server: {
    proxy: {
      '/api': {
        target: 'https://www.rakki.fun:30789',
        secure: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
