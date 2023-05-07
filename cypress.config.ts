import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  env: {
    WEATHER_API_URL: "http://dataservice.accuweather.com",
    WEATHER_API_KEY: "9v7n5SUsjmhs4ZpmHw9lveA0cElmIiN9",
  },

  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
