import { defineConfig } from "cypress";
import { addMatchImageSnapshotPlugin } from 'cypress-plugin-snapshots/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Register the task event listener
      on('task', addMatchImageSnapshotPlugin);
    },
  },
  video: true,

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
