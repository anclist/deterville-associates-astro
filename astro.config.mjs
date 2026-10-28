// @ts-check
import { defineConfig } from 'astro/config';
import basePath from './integrations/base-path.mjs';

// GitHub Pages build sets SITE/BASE; local dev serves from root.
const site = process.env.SITE ?? 'https://detervilleassociates.com';
const base = process.env.BASE ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [basePath()],
});
