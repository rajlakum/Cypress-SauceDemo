const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true
  },


  e2e: {
    baseUrl : "https://sauce-demo.myshopify.com/account/login",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
  },

  env:{
    URL: "https://sauce-demo.myshopify.com/account/register"
    
  }
});
