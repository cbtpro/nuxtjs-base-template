module.exports = {
  apps: [
    {
      name: 'NuxtAppName',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
      env: {
        /**
         * Environment variables for the Nuxt application.
         * These variables can be used to configure the application at runtime.
         */
        NUXT_PUBLIC_API_PREFIX: process.env.API_PREFIX,
      },
    }
  ]
};
