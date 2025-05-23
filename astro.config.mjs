import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://bolaojewale.com/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://bolaojewale.com/sitemap-index.xml",
        "https://bolaojewale.com/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: 'server',
  adapter: cloudflare(),
  image: {
    service: { entrypoint: 'astro/assets/services/compile' }, // Use compile instead of sharp for Cloudflare compatibility
  },
});
