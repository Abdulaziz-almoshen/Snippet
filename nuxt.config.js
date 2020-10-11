let env = require('dotenv').config()
export default {
  server: {
    port: 3000, // default: 3000
    host: '127.0.0.1' // default: localhost
  },

/*
** Nuxt rendering mode
** See https://nuxtjs.org/api/configuration-mode
*/
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title:'Snippet',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {rel: 'stylesheet', href:'https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap'}
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/app.css'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'

  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  baseURL : env.parsed.API_URL,
  proxy: false

  },

  auth:{
    strategies:{
      local:{
        endpoints:{
          login:{
            url: 'auth/login',
            method: 'post',
            propertyName: 'data.token'
          },
          user: {
            url: 'auth/me',
            method: 'get',
            propertyName: 'data'
          },
          logout: {
            url: 'auth/logout',
            method: 'post',
          }
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    postcss:{
      plugins:{
        tailwindcss:'./tailwind.config.js'
      }
    }
  }
}
