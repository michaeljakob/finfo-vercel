import i18n from './config/i18n';

export default {
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'finfo - der profitabelste Newsletter Deutschlands',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
      // twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@AlleAktien' },
      { name: 'twitter:creator', content: '@AlleAktien' },
      { name: 'twitter:title', content: `finfo - der profitabelste Newsletter Deutschlands` },
      { name: 'twitter:image', content: `https://superfinfo.com/favicon.png` },
      { name: 'twitter:description', content: `finfo - der profitabelste Newsletter Deutschlands. Der tägliche memebasierte Newsletter von AlleAktien.` },
      // facebook
      { property: 'og:title', content: `finfo - der profitabelste Newsletter Deutschlands` },
      { property: 'og:image', content: `https://superfinfo.com/favicon.png` },
      { property: 'og:description', content: `finfo - der profitabelste Newsletter Deutschlands. Der tägliche memebasierte Newsletter von AlleAktien.` },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:type', content: 'article' },
      { property: 'og:site_name', content: 'finfo' },
      // general
      { name: 'description', content: `finfo - der profitabelste Newsletter Deutschlands` },
      { name: 'keywords', content: `finfo, superfinfo, aktien newsletter, alleaktien news, finfo, alleaktien, super finfo, aktien täglicher Newsletter, alleaktien newsletter, aktien newsletter memes` },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/finfo-green.png' },
      { rel: 'stylesheet', type: 'text/css', href: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' }
    ],
    script: [
      { src: 'https://plausible.io/js/plausible.js', async: 'async', defer: 'defer', 'data-domain': 'superfinfo.com' },
    ]
  },
  i18n: {
    baseUrl: 'https://superfinfo.com',
  },  
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '~assets/css/main.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  server: {
    host: '0.0.0.0',
  },
  buildModules: [
    '@nuxt/postcss8',
    [
      'nuxt-i18n',
      {
        vueI18nLoader: true,
        defaultLocale: 'de',
         locales: [
          {
            code: 'de',
            name: 'Deutsch 🇩🇪'
          },
          // {
          //   code: 'en',
          //   name: 'English 🇺🇸'
          // },
          {
            code: 'fr',
            name: 'Français 🇫🇷'
          },
          {
            code: 'es',
            name: 'Español 🇪🇸'
          },
          {
            code: 'it',
            name: 'Italiano 🇮🇹'
          },
          {
            code: 'nl',
            name: 'Nederlands 🇳🇱'
          },
        ],
        vueI18n: i18n
      }
     ]
  ]
};

