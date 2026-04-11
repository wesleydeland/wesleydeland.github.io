import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://wesleydeland.com',
  base: '/blog',
  output: 'static',
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        format: 'webp',
        quality: 80,
      }
    }
  },
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    mdx(),
    sitemap()
  ]
});