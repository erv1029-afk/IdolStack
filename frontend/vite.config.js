import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@assets': path.resolve(__dirname, 'src/assets'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // 🔁 Proxy API requests to your backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
