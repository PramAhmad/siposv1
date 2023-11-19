// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js',
        defer: true, // Load the script asynchronously
      },
    ],
},
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
  plugins: [
    { src: '@/plugins/sweetalert.js', mode: 'client' }
  ]
   
  
})
