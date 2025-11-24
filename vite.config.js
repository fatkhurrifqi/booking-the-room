import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // srcDir: 'src',
      // filename: 'sw.js',
      strategies: 'generateSW',
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Luxspace Ecommerce',
        short_name: 'Luxspace',
        start_url: '.',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          // {
          //   src: '/images/favicon.ico',
          //   type: 'image/x-icon',
          //   sizes: '48x48',
          // },
          {
            src: 'icon-120.png',
            sizes: '120x120',
            type: 'image/png',
          },
          {
            src: 'icon-144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icon-152.png',
            sizes: '152x152',
            type: 'image/png',
          },
          {
            src: 'icon-167.png',
            sizes: '167x167',
            type: 'image/png',
          },
          {
            src: 'icon-180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
    tailwindcss(),
  ],
});
