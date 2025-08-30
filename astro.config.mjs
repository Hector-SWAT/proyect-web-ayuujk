import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robots from '@astrojs/robots';

export default defineConfig({
  site: 'https://taxiayuujk.com', // 👈 tu dominio (IMPORTANTE)
  integrations: [
    tailwind(),
    sitemap(),
    robots({
      sitemap: 'https://taxiayuujk.com/sitemap-index.xml',
    }),
  ],
});
