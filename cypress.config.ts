import { defineConfig } from "cypress";

export default defineConfig({
  video: true,

  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
