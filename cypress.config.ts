import { defineConfig } from "cypress";
import { configureVisualRegression } from "cypress-visual-regression/dist/plugin";

export default defineConfig({
  e2e: {},

  component: {
    env: {
      visualRegressionType: "regression",
    },
    screenshotsFolder: "./cypress/snapshots/actual",
    setupNodeEvents(on, config) {
      configureVisualRegression(on);
    },
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
