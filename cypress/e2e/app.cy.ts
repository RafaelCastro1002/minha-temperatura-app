import { formatTemperatureNumber } from "../../src/utils/number";

export const verifyIsDayTime = (date: Date) => {
  const hours = date.getHours();

  return hours > 6 && hours < 20;
};

describe("Minha Temperatura E2E tests", () => {
  const climateConditions = {
    temperature: 25,
    weatherText: "Ensolarado",
    realFeelTemperature: 20,
    relativeHumidity: 70,
    wind: 100,
    uvIndexText: "Moderado",
    temperatureUnit: "C",
    speedUnit: "km/h",
  };

  let dailyForecastsFakeApi;

  beforeEach(() => {
    cy.fixture("dailyForecastsFakeApi").then((response) => {
      dailyForecastsFakeApi = response;

      const apiKey = Cypress.env("WEATHER_API_KEY");

      const interceptApiUrl = `${Cypress.env(
        "WEATHER_API_URL"
      )}/forecasts/v1/daily/5day/38802?apikey=${apiKey}&language=pt-br&metric=true`;

      console.log("interceptApiUrl: ", interceptApiUrl);

      cy.intercept("GET", interceptApiUrl, {
        body: response,
        statusCode: 200,
      });
    });

    const lat = -20.459593;
    const lng = -55.777084;

    cy.climateConditionsApiIntercept(climateConditions);
    cy.visitWithMockGeolocation(lat, lng);
  });

  it("should render correctly data from current climate conditions", () => {
    const {
      temperature,
      weatherText,
      realFeelTemperature,
      relativeHumidity,
      wind,
      uvIndexText,
      temperatureUnit,
      speedUnit,
    } = climateConditions;

    cy.get('[data-cy="city-name"]').should("have.text", "Aquidauana");
    cy.get('[data-cy="temperature-value"]').should(
      "have.text",
      `${temperature}°${temperatureUnit}`
    );
    cy.get('[data-cy="weather-text"]').should("have.text", weatherText);

    const budgets = cy.get(
      '[data-cy="budget-container"] > [data-cy="budget-container-text"] > [data-cy="value-Budget"]'
    );

    budgets.then(($value) => {
      expect($value[0].innerText).to.equal(
        `${realFeelTemperature}°${temperatureUnit}`
      );
      expect($value[1].innerText).to.equal(`${relativeHumidity}%`);
      expect($value[2].innerText).to.equal(`${wind} ${speedUnit}`);
      expect($value[3].innerText).to.equal(`${uvIndexText}`);
    });
  });

  it("should render correctly temperature forecasts range in Home Page", () => {
    const forecastsDescription = cy.get(`
        [data-cy="forecast-card"] > 
        [data-cy="container"] > 
        [data-cy="period-container"] > 
        [data-cy="text-description"]
      `);

    const minimumTemperature = cy.get(`
        [data-cy="forecast-card"] > 
        [data-cy="container"] > 
        [data-cy="temperature-range"] > 
        [data-cy="minimum-temperature"]
      `);

    const maximumTemperature = cy.get(`
        [data-cy="forecast-card"] > 
        [data-cy="container"] > 
        [data-cy="temperature-range"] > 
        [data-cy="maximum-temperature"]
      `);

    const isDayTime = verifyIsDayTime(new Date());

    forecastsDescription.then(($weatherTextElements) => {
      minimumTemperature.then(($minimumTemperature) => {
        maximumTemperature.then(($maximumTemperature) => {
          const propertyInfos = isDayTime ? "Day" : "Night";

          dailyForecastsFakeApi.DailyForecasts.forEach((daily, index) => {
            expect($weatherTextElements[index].innerText).to.equal(
              daily[propertyInfos].IconPhrase
            );

            const { Minimum, Maximum } = daily.Temperature;

            console.log(
              "$minimumTemperature[index].innerText: ",
              $minimumTemperature[index].innerText
            );

            expect($minimumTemperature[index].innerText).to.equal(
              formatTemperatureNumber({
                temperature: Minimum.Value,
                unit: Minimum.Unit,
              })
            );

            expect($maximumTemperature[index].innerText).to.equal(
              formatTemperatureNumber({
                temperature: Maximum.Value,
                unit: Maximum.Unit,
              })
            );
          });
        });
      });
    });
  });

  it("should correctly navigate to another route", () => {
    const routerOptionElement = cy.get('[data-cy="Últimas 24 horas"]');
    routerOptionElement.click();

    routerOptionElement.should("have.css", "color", "rgb(146, 20, 12)");

    cy.get('[data-cy="title-page"]').should(
      "have.text",
      "Histórico das últimas 24 horas"
    );
  });
});
