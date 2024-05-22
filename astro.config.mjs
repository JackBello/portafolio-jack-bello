import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  site: "https://jackbello.deno.dev",
  base: "/",
  vite: {
    server: {
      watch: {
        ignored: ["main.ts"],
      },
    },
    build: {
      rollupOptions: {
        external: ["main.ts"],
      },
    },
  },
});
