export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target:"static",
  ssr:false,
  generate:{
    fallback:true
  },

  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { hid: 'stripe', src: '/vendor/jquery.min.js', defer: true },
      { hid: 'stripe', src: '/vendor/popper.min.js', defer: true },
      { hid: 'stripe', src: '/vendor/bootstrap.min.js', defer: true },
      { hid: 'stripe', src: '/vendor/perfect-scrollbar.min.js', defer: true },
      { hid: 'stripe', src: '/vendor/dom-factory.js', defer: true },
      { hid: 'stripe', src: '/vendor/material-design-kit.js', defer: true },
      { hid: 'stripe', src: '/js/app.js', defer: true },
      { hid: 'stripe', src: '/js/preloader.js', defer: true },
      { hid: 'stripe', src: '/js/sidebar-mini.js', defer: true },


    ]
  },

  axios: {
    // baseURL: 'https://learn.kamifatech.co.zw/api/v1',
    baseURL: ' http://127.0.0.1:8000/api/v1',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~assets/css/style.css",
    "~assets/vendor/spinkit.css",
    "~assets/vendor/perfect-scrollbar.css",
    "~assets/css/material-icons.css",
    "~assets/css/fontawesome.css",
    "~assets/css/preloader.css",
    "vue-select/dist/vue-select.css",
    "vue-tel-input/dist/vue-tel-input.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-select.js',
    '~/plugins/vue-tel-input.js',

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap-vue/nuxt',
    'cookie-universal-nuxt',
    '@nuxtjs/axios',
    'vue-sweetalert2/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
