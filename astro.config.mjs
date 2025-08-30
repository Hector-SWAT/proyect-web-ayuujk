import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://taxiayuujk.com', // 👈 tu dominio (IMPORTANTE)
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
