import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [react()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});
