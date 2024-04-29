import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import markdoc from "@astrojs/markdoc";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [expressiveCode(), sitemap(), markdoc(), ]
});