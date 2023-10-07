const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportHeight: 846,
  viewportWidth: 1440,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
  },
});
