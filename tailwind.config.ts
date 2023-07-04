import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,tsx}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*ts",
    "./plugins/**/*ts",
    "./utils/**/*ts",
    "./app.vue",
    "./error.vue",
    "./app.config.ts",
  ],
  corePlugins: {
    preflight: false,
  },
  prefix: "tw-",
  theme: {
    fontFamily: {
      sans: "inherit",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    colors: {
      primary: "rgba(var(--v-theme-primary), <alpha-value>)",
      secondary: "rgba(var(--v-theme-secondary), <alpha-value>)",
    },
  },
  plugins: [],
};
