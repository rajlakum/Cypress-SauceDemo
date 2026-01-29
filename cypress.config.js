const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',

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
