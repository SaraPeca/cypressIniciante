const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationpratice.com.br/',
    defaultCommandTimeout: 5000,
    // Definir resolução em que os testes devem ser executados:
    // viewportHeight = 390,
    // viewportHeight = 844,
    setupNodeEvents(on, config) {
      // implement node event listeners here
     },
  },
});
