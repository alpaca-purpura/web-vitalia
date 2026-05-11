import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  output: 'static', // Explicitly configure for Static Site Generation (SSG)
  site: 'https://vitalialatam.com', // Replace with actual domain when ready
  integrations: [tailwind(), sitemap()],
});
