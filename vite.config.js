import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Set the base path to ensure relative paths are used in production
  plugins: [react()],
});
