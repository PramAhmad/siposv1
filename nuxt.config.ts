// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL,
    },
    
},
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@pinia/nuxt','nuxt-swiper'],

  supabase: {
    redirect: false
  },
  
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    '@/assets/css/main.css',
  ],

   
  
})
