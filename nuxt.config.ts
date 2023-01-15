// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  css: ["@/assets/styles/main.scss"],
  imports: {
    autoImport: false,
  },
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
