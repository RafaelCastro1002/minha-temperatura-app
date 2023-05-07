import { AxiosInstance } from "axios";
import weatherApiConfig from "../configs/apis/weather";

export default class WeatherApi {
  private _api: AxiosInstance;

  constructor() {
    this._api = weatherApiConfig;
  }

  protected _getLocation({ lat, lng }: WeatherApi.getLocation) {
    return this._api.get("/locations/v1/cities/geoposition/search", {
      params: {
        q: `${lat},${lng}`,
      },
    });
  }

  protected _getCurrentConditions({
    locationKey,
  }: WeatherApi.getCurrentConditions) {
    return this._api.get(`currentconditions/v1/${locationKey}`, {
      params: {
        details: true,
      },
    });
  }

  protected _getDailyForecasts({ locationKey }: WeatherApi.getDailyForecasts) {
    return this._api.get(`/forecasts/v1/daily/5day/${locationKey}`, {
      params: {
        metric: true,
      },
    });
  }

  protected _getHistoricalCurrentConditions({
    locationKey,
  }: WeatherApi.getCurrentConditions) {
    return this._api.get(`currentconditions/v1/${locationKey}/historical/24`, {
      params: {
        details: true,
      },
    });
  }
}
