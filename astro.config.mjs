import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    react(),
    robotsTxt({
      sitemap: false,
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
