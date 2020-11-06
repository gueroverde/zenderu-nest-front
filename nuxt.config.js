export default {
  ssr: false,
  env: { ...process.env },
  loading: '~/components/loading.vue',
  head: {
    title: 'Zenderu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/scss/app.scss'],
  plugins: [
    '~/plugins/i18n.js',
    '~/plugins/vuelidate.js',
    '~/plugins/simplebar.js',
    '~/plugins/vue-click-outside.js',
    '~/plugins/vue-headroom.js',
  ],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'vue-scrollto/nuxt',
  ],
  axios: {},
  build: {},
}
