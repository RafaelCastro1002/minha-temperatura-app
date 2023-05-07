import axios from "axios";

const weatherApiConfig = axios.create({
  baseURL: process.env.REACT_APP_API_WEATHER_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY_WEATHER,
    language: "pt-br",
  },
});

export default weatherApiConfig;
