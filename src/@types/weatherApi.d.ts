interface getLocationType {
  lat: number;
  lng: number;
}

declare namespace WeatherApi {
  export type getLocation = getLocationType;

  export type getCurrentConditions = {
    locationKey: number;
  };

  export type getDailyForecasts = {
    locationKey: number;
  };
}
