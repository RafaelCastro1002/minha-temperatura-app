import { LocationType } from "../@types/location";
import WeatherApi from "../apis/WeatherApi";
import ClimateConditionsModel from "../models/ClimateConditionsModel";
import DailyForecastModel from "../models/DailyForecastModel";

export default class WeatherService extends WeatherApi {
  async getLocationByGeoposition(
    params: WeatherApi.getLocation
  ): Promise<Pick<LocationType, "key" | "name" | "state">> {
    const response = await this._getLocation(params);

    const { Key, LocalizedName, AdministrativeArea } = response.data;

    const { ID, CountryID } = AdministrativeArea;

    return {
      key: Key,
      name: LocalizedName,
      state: {
        name: AdministrativeArea.LocalizedName,
        id: ID,
        countryId: CountryID,
      },
    };
  }

  async getCurrentConditionsToLocation(
    params: WeatherApi.getCurrentConditions
  ) {
    const response = await this._getCurrentConditions(params);

    const {
      WeatherText,
      WeatherIcon,
      HasPrecipitation,
      PrecipitationType,
      IsDayTime,
      Temperature,
      RealFeelTemperature,
      RelativeHumidity,
      Wind,
      UVIndexText,
    } = response.data[0];

    return new ClimateConditionsModel({
      weatherIconId: WeatherIcon,
      weatherText: WeatherText,
      hasPrecipitation: HasPrecipitation,
      precipitationType: PrecipitationType,
      isDayTime: IsDayTime,
      currentTemperature: Temperature.Metric.Value,
      realFeelTemperature: RealFeelTemperature.Metric.Value,
      relativeHumidity: RelativeHumidity,
      wind: Wind.Speed.Metric.Value,
      uvIndexText: UVIndexText,
      temperatureUnit: Temperature.Metric.Unit,
      speedUnit: Wind.Speed.Metric.Unit,
    });
  }

  async getDailyForecasts(
    params: WeatherApi.getDailyForecasts
  ): Promise<DailyForecastModel[]> {
    const response = await this._getDailyForecasts(params);

    const { DailyForecasts } = response.data;

    return DailyForecasts.map((dailyForecast: any) => {
      const { Date, Temperature, Day, Night } = dailyForecast;

      return new DailyForecastModel({
        date: Date,
        maximumTemperature: Temperature.Maximum.Value,
        minimumTemperature: Temperature.Minimum.Value,
        dayIconId: Day.Icon,
        nightIconId: Night.Icon,
        dayIconText: Day.IconPhrase,
        nightIconText: Night.IconPhrase,
        temperatureUnit: Temperature.Minimum.Unit,
      });
    });
  }

  async getHistoricalCurrentConditions(
    params: WeatherApi.getCurrentConditions
  ): Promise<ClimateConditionsModel[]> {
    const response = await this._getHistoricalCurrentConditions(params);

    const historicalConditions = response.data;

    return historicalConditions.map((climateConditions: any) => {
      const {
        WeatherText,
        WeatherIcon,
        HasPrecipitation,
        PrecipitationType,
        IsDayTime,
        Temperature,
        RealFeelTemperature,
        RelativeHumidity,
        Wind,
        UVIndexText,
        LocalObservationDateTime,
      } = climateConditions;

      return new ClimateConditionsModel({
        weatherIconId: WeatherIcon,
        weatherText: WeatherText,
        hasPrecipitation: HasPrecipitation,
        precipitationType: PrecipitationType,
        isDayTime: IsDayTime,
        currentTemperature: Temperature.Metric.Value,
        realFeelTemperature: RealFeelTemperature.Metric.Value,
        relativeHumidity: RelativeHumidity,
        wind: Wind.Speed.Metric.Value,
        uvIndexText: UVIndexText,
        temperatureUnit: Temperature.Metric.Unit,
        speedUnit: Wind.Speed.Metric.Unit,
        dateTime: LocalObservationDateTime,
      });
    });
  }
}
