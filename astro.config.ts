import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// عنوان الموقع يُضبط من مكان واحد فقط عبر SITE_URL.
// اتركه فارغاً أثناء التطوير؛ البناء سيبقى صالحاً بدون نطاق.
const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: 'static',
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()]
  }
});
