// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './', // Add this line to set the base path
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Change this to your backend URL
        changeOrigin: true,
        secure: false, // Set to true if your backend uses HTTPS
      },
    },
  },
});
