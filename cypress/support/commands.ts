/// <reference types="cypress" />

import { log } from "console";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add(
  "visitWithMockGeolocation",
  (latitude = 54, longitude = 39, url = "") => {
    const mockGeolocation = (win, latitude, longitude) => {
      cy.stub(win.navigator.geolocation, "getCurrentPosition").callsFake(
        (cb) => {
          return cb({ coords: { latitude, longitude } });
        }
      );
    };
    cy.visit(url, {
      onBeforeLoad: (win) => {
        mockGeolocation(win, latitude, longitude);
      },
    });
  }
);

Cypress.Commands.add(
  "climateConditionsApiIntercept",
  ({
    temperature,
    weatherText,
    realFeelTemperature,
    relativeHumidity,
    wind,
    uvIndexText,
    temperatureUnit,
    speedUnit,
  }) => {
    const apiKey = Cypress.env("WEATHER_API_KEY");

    cy.fixture("climateConditionsFakeApi").then((currentClimateConditions) => {
      const climateConditions = currentClimateConditions;

      climateConditions[0].Temperature.Metric.Value = temperature;
      climateConditions[0].RealFeelTemperature.Metric.Value =
        realFeelTemperature;
      climateConditions[0].WeatherText = weatherText;
      climateConditions[0].RelativeHumidity = relativeHumidity;
      climateConditions[0].Wind.Speed.Metric.Value = wind;
      climateConditions[0].UVIndexText = uvIndexText;
      climateConditions[0].Wind.Speed.Metric.Unit = speedUnit;

      climateConditions[0].Temperature.Metric.Unit = temperatureUnit;
      climateConditions[0].RealFeelTemperature.Metric.Unit = temperatureUnit;

      const urlApi = `${Cypress.env(
        "WEATHER_API_URL"
      )}/currentconditions/v1/38802?apikey=${apiKey}&language=pt-br&details=true`;

      cy.intercept("GET", urlApi, {
        body: currentClimateConditions,
        statusCode: 200,
      });
    });
  }
);
