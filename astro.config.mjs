import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";
import deno from "@deno/astro-adapter";
import sharpPlugin from "vite-plugin-sharp";

// https://astro.build/config
export default defineConfig({
  integrations: [astroI18next()],
  output: "server",
  adapter: deno(),
  site: "https://jackbello.deno.dev",
  vite: {
    plugins: [sharpPlugin()],
  },
});
