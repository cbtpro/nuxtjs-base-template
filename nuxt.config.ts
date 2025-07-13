// https://nuxt.com/docs/api/configuration/nuxt-config
import module0 from './packages/nuxtjs-module-0';
import module1 from './packages/nuxtjs-module-1';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devServer: {
    host: '0.0.0.0',
    port: 8864,
    cors: {},
    https: false,
  },
  devtools: { enabled: true },
  // 禁用默认的 google 字体提供商
  fonts: {
    providers: {
      google: false,
      googleicons: false,
      bunny: false,
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    // '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    module0,
    module1
  ]
});