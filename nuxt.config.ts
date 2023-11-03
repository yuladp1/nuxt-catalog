// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  modules: ['@nuxtjs/tailwindcss',
    '@nuxtjs/algolia'],
    algolia: {
      apiKey: 'a72f660af9a73e035508ba332d4d8dff',
      applicationId: 'IUVNKR0IHG',
    },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})