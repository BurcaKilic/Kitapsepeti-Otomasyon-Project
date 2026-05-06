const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.kitapsepeti.com",
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 10000,
    video: true,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
    },
  },
});