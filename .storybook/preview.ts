import { type Preview, setup } from "@storybook/vue3-vite";
import { type App } from "vue";
import router from "../src/router/index.ts";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import "../src/assets/main.css";

import { createPinia } from "pinia";
const pinia = createPinia();

setup((app: App) => {
  app.use(router);
  app.use(pinia);
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
