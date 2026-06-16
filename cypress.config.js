//npx cypress run --record --key 6370cce8-4515-465b-9fc3-c38fa0374b8f
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "9g4yie",  // ← will update this
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});