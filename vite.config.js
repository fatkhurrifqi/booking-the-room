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
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
      },
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'Luxspace Ecommerce',
        short_name: 'Luxspace',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        icons: [
          {
            src: '/images/favicon.ico',
            sizes: '48x48',
            type: 'image/x-icon',
          },
        ],
      },
    }),
    tailwindcss(),
  ],
});
