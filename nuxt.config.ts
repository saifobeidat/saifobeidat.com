// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  imports: {
    dirs: ["stores", "types"]
  },
  css: ["~/assets/css/main.css"],
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxt/content"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
});
