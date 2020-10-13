import { TRUE } from "node-sass";
require('dotenv').config()

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "ecng",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@assets/css/main"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/fontawesome"],
  fontawesome: {
    component: "fa",
    icons: {
      solid: true,
      brands: true
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    // '@nuxtjs/fontawesome'
    "@nuxtjs/firebase"
    // adding firebase
  ],
  firebase: {
    config: {
      apiKey: "<apiKey>",
      authDomain: "<authDomain>",
      databaseURL: "<databaseURL>",
      projectId: "<projectId>",
      storageBucket: "<storageBucket>",
      messagingSenderId: "<messagingSenderId>",
      appId: "<appId>",
      measurementId: "<measurementId>"
    },
    services: {
      auth: true,
      firestore: true,
      storage: true,
      messaging: true,
      performance: true,
      analytics: true
    }
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
