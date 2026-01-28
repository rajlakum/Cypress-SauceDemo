const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env:{
    URL: "https://sauce-demo.myshopify.com/account/register"
  }
});
