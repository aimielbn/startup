// https://nuxt.com/docs/api/configuration/nuxt-config

const defaultTheme = require("tailwindcss/defaultTheme");

export default defineNuxtConfig({
  build: {
    transpile: ["tslib"],
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/apollo", "@nuxtjs/tailwindcss", "@nuxt/image"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clq0nu8m2sm5p01ul7yfe7pcf/master",
      },
    },
  },
  css: ["assets/font.css","@fortawesome/fontawesome-free/css/all.css"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          fontFamily: {
            sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            serif: ["Changa", ...defaultTheme.fontFamily.serif],
          },
        },
      },
    },
  },
});