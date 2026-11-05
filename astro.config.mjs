import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // SITE_URL und BASE_PATH setzt der GitHub-Pages-Workflow, weil die Seite dort unter einem Unterpfad liegt.
  site: process.env.SITE_URL || 'https://www.ketzinerbaustoffhandel.de',
  base: process.env.BASE_PATH || '/',
  integrations: [sitemap()],
});
