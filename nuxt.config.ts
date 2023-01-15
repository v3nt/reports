// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/styles/main.scss"],
  // build: { transpile: ["@nuxtjs/style-resources"] },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/_variables.sass";',
        },
      },
    },
  },
});
