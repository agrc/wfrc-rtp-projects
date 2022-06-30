import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  test: {
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.js'],
  },
});
