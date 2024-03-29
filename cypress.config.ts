/* eslint @typescript-eslint/no-var-requires: "off" */
import { defineConfig } from "cypress";
import { configureAllureAdapterPlugins } from "@mmisty/cypress-allure-adapter/plugins";

import _ from "lodash/fp";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      require("cypress-mochawesome-reporter/plugin")(on);
      require("@cypress/grep/src/plugin")(config);

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
  retries: {
    runMode: 1,
  },
  chromeWebSecurity: false,
  viewportHeight: 800,
  viewportWidth: 1440,
  watchForFileChanges: false,
  screenshotsFolder: "reports/screenshots",
  video: false,
  videosFolder: "reports/videos",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "reports/html",
    charts: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
