/* eslint @typescript-eslint/no-var-requires: "off" */
import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";
import _ from "lodash/fp";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);

      const environmentName = config.env.configFile || "qat";
      const environmentFilename = `./config/${environmentName}.json`;
      const envConfig = require(environmentFilename);

      return _.merge(config, envConfig);
    },
    env: {
      allure: true,
      allureResults: "reports/allure-results",
    },
  },
  chromeWebSecurity: false,
  viewportHeight: 800,
  viewportWidth: 1440,
  watchForFileChanges: false,
  screenshotsFolder: "reports/screenshots",
  video: false,
  videosFolder: "reports/videos",
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports/results",
    overwrite: false,
    html: true,
    json: false,
  },
});
