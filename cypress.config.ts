import fs from 'fs-extra'
import path from 'path'
import { defineConfig } from 'cypress'

import { defaultConfiguration } from './cypress/configFiles/defaultConfig';

let getConfigurationByFile = async (config: Cypress.PluginConfigOptions) => {
  let file = config.env.fileConfig || "dev";
  let configurationByFile = await fs.readJson(
    path.resolve("cypress/configFiles", `${file}.json`)
  );
  return { ...defaultConfiguration, ...configurationByFile };
};

module.exports = defineConfig({
  projectId: 'isexe7',
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    async setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      let configFromFile = await getConfigurationByFile(config);
      return { ...config, ...configFromFile };
    },
    retries: {
      runMode: 1,
      openMode: 0
    }
  },
});
