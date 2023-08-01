const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'zzwex2',
  e2e: {
    setupNodeEvents(on, config) {},

    baseUrl: 'https://www.amkmgroup.com/',
    defaultCommandTimeout: 1000,
    execTimeout: 10000,
    taskTimeout: 10000,
    pageLoadTimeout: 10000,
    includeShadowDom: true,
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx,feature}',
    retries: {
      runMode: 4,
      openMode: 4,
    },
  },
});
