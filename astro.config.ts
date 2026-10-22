import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Override only when building a deliberately separate preview.
const site = process.env.SITE_URL?.trim() || 'https://raghadanforest.com';

export default defineConfig({
  site,
  output: 'static',
  integrations: [sitemap({ filter: (url) => !url.includes('/404') })],
  vite: {
    plugins: [tailwindcss()]
  }
});
