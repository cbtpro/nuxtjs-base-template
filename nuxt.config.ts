// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url';
import module0 from './packages/nuxtjs-module-0';
import module1 from './packages/nuxtjs-module-1';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  runtimeConfig: {
    public: {
      // @see https://nuxt.com/docs/guide/going-further/runtime-config#example
      apiPrefix: '', // 可以被NUXT_PUBLIC_API_PREFIX环境变量覆盖
      baseServiceUrl: '', // 可以被NUXT_PUBLIC_BASE_SERVICE_URL环境变量覆盖
      userServiceUrl: '', // 可以被NUXT_PUBLIC_USER_SERVICE_URL环境变量覆盖
    },
  },
  icon: {
    customCollections: [{
      prefix: 'custom',
      dir: './assets/icons'
    }]
  },
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