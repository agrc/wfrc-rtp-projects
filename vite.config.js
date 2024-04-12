/* eslint-env node */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
function watchConfigFiles() {
  return {
    name: 'watch-config-files',
    enforce: 'post',
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.json') || file.endsWith('about.html')) {
        server.ws.send({
          type: 'full-reload',
          path: '*',
        });
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), watchConfigFiles()],
  base: './',
  test: {
    environment: 'happy-dom',
    setupFiles: ['./tests/setup.js'],
  },
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
