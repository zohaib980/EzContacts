const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8f2166',
  watchForFileChanges : false,
  chromeWebSecurity : false,
  retries:{runMode:1},
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'EZContact Test Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportFilename: "Report-[datetime]-report",
    timestamp: "longDate"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl : 'https://www.ezcontacts.com',
    "pageLoadTimeout": 30000,
    "defaultCommandTimeout": 30000,
    
  },
});
