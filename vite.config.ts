//vite.config.ts 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import compression from 'vite-plugin-compression';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: 'gzip' }), // Gzip 압축 활성화
    compression({ algorithm: 'brotliCompress', ext: '.br' }) // Brotli 압축 활성화
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
      '@icons': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
      '@muiDom': path.resolve(__dirname, 'node_modules/@mui/material'),
    },
  },
  build: {
    rollupOptions: {
        output: {
          manualChunks: {
            firebase: [
              'firebase/app',
              'firebase/auth',
              'firebase/storage',
              'firebase/firestore',
            ],
            react: [
              'react-dom',
              'react-query',
              'react-router-dom'
            ],
          }
        },
    },
},
});