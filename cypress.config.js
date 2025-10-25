const { defineConfig } = require('cypress')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    fileServerFolder: path.resolve('./public'),
    viewportWidth: 1280,
    viewportHeight: 800,
    video: false,
    supportFile: 'cypress/support/e2e.js',
  },
})
