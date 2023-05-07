export default class ClimateConditionsModel {
  public weatherIconId: number;
  public weatherText: string;
  public hasPrecipitation: boolean;
  public precipitationType?: string;
  public isDayTime: boolean;
  public currentTemperature: number;
  public realFeelTemperature: number;
  public relativeHumidity: number;
  public wind: number;
  public uvIndexText: string;
  public temperatureUnit: string;
  public speedUnit: string;
  public dateTime?: Date;

  constructor(params: any) {
    const {
      weatherIconId,
      weatherText,
      hasPrecipitation,
      precipitationType,
      isDayTime,
      currentTemperature,
      realFeelTemperature,
      relativeHumidity,
      wind,
      uvIndexText,
      temperatureUnit,
      speedUnit,
      dateTime,
    } = params;

    this.weatherIconId = weatherIconId;
    this.weatherText = weatherText;
    this.hasPrecipitation = hasPrecipitation;
    this.precipitationType = precipitationType;
    this.isDayTime = isDayTime;
    this.currentTemperature = currentTemperature;
    this.realFeelTemperature = realFeelTemperature;
    this.relativeHumidity = relativeHumidity;
    this.wind = wind;
    this.uvIndexText = uvIndexText;
    this.temperatureUnit = temperatureUnit;
    this.speedUnit = speedUnit;
    this.dateTime = dateTime ? new Date(dateTime) : undefined;
  }
}
