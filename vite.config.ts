import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import { crx } from '@crxjs/vite-plugin';
import manifest from './manifest.json';
import { resolve } from 'path';
const srcDir = resolve(__dirname, 'src');
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    crx({ manifest: manifest }),
  ],
  build: {
    // dont minify the code
    minify: false,
  },
  resolve: {
    alias: {
      src: '/src',
      '~/src': '/src',
      '~/contexts': '/src/contexts',
      '~/components': '/src/components',
      '~/stores': '/src/stores',
      '~/assets': '/src/assets',
      '~/utils': '/src/utils',
      '~/backgroundScripts': '/src/backgroundScripts',
      '~/db': '/src/db',
      '~/lib': '/src/lib',
      '~/contentScript': '/src/contentScript',
      '~/config': '/src/config',
      '~/parsers': '/src/contentScript/parsers',
    },
  },
});
