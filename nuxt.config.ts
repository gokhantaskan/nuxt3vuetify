import { createResolver } from "@nuxt/kit";
import vuetify from "vite-plugin-vuetify";
import svgLoader from "vite-svg-loader";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
  ],
  vue: {
    defineModel: true,
    propsDestructure: true,
  },
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&display=swap",
        },
      ],
    },
  },
  css: [
    "~/assets/styles/vuetify/main.scss",
    "~/assets/styles/custom/main.scss",
  ],
  eslint: {
    cache: false,
  },
  stylelint: {
    cache: false,
  },
  tailwindcss: {
    configPath: "~/tailwind.config.ts",
    cssPath: "~/assets/styles/tailwind/main.scss",
    viewer: true,
    injectPosition: "first",
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  image: {
    dir: "~/assets/img",
  },
  build: {
    transpile: ["vuetify"],
  },
  hooks: {
    "vite:extendConfig": config => {
      config.plugins?.push(
        vuetify({
          styles: {
            configFile: resolve("./assets/styles/vuetify/settings.scss"),
          },
        }),
        svgLoader({
          svgoConfig: {
            // https://github.com/svg/svgo#built-in-plugins
            plugins: ["preset-default", "removeDimensions"],
          },
        })
      );
    },
  },
});
