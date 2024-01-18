const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Adding viewport and video
  viewportHeight : 1080,
  viewportWidth : 1920,
  experimentalModifyObstructiveThirdPartyCode: true,
  chromeWebSecurity: false,
  video : true,
  e2e: {
    //Here on the end to end I put the baseurl
    baseUrl : "https://premier-quote-frontend-qa.azurewebsites.net/",
    // baseUrl : "https://premier-quote-frontend-dev.azurewebsites.net/",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
