type ClimateConditionsApiInterceptProps = {
  temperature?: number;
  weatherText?: string;
  realFeelTemperature?: number;
  relativeHumidity?: number;
  wind?: number;
  uvIndexText?: string;
  temperatureUnit?: string;
  speedUnit?: string;
};

declare namespace Cypress {
  interface Chainable {
    visitWithMockGeolocation(
      lat?: number,
      lng?: number,
      url?: string
    ): Chainable<Element>;
    climateConditionsApiIntercept(
      props: ClimateConditionsApiInterceptProps
    ): Chainable<Element>;
  }
}
