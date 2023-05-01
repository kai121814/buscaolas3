// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
        integrity: 'sha384-Qz0oNfoK3lPT7F5g5XnmQeV5ZiymOnaCj6brfOhQDIARd6Hvvl5RyWId+9fh6PVR',
        crossorigin: 'anonymous'
      }
    ]
  },  
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: [
    '~/assets/css/main.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})