const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges : false,
  chromeWebSecurity : false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.ezcontacts.com',
    "defaultCommandTimeout": 20000,
  },
});
