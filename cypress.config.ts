import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },

    video: false
  },

  env: {
    WEATHER_API_URL: "https://express-api-proxy-example.vercel.app",
    WEATHER_API_KEY: "9v7n5SUsjmhs4ZpmHw9lveA0cElmIiN9",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
    video: false
  },
});
