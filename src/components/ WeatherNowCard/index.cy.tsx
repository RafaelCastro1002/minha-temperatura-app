import WeatherNowCard from ".";
import { LocationType } from "../../@types/location";
import ClimateConditionsModel from "../../models/ClimateConditionsModel";
import Theme from "../../theme";

describe("<WeatherNowCard />", () => {
  let currentClimateConditions: ClimateConditionsModel | null;
  let location: Partial<LocationType>;

  const loadFixtures = () => {
    cy.fixture("currentClimateConditions").then((response) => {
      currentClimateConditions = response;
    });

    cy.fixture("location").then((response) => {
      location = response;
    });
  };

  beforeEach(() => {
    loadFixtures();
  });

  it("should render temperature correctly", () => {
    cy.mount(
      <>
        <Theme>
          <WeatherNowCard
            climateConditions={currentClimateConditions}
            location={location}
          />
        </Theme>
      </>
    );

    const { name: cityName } = location;
    const { currentTemperature, temperatureUnit, weatherText } =
      currentClimateConditions as ClimateConditionsModel;

    cy.get('[data-cy="city-name"]').should("have.text", cityName);
    cy.get('[data-cy="temperature-value"]').should(
      "have.text",
      `${currentTemperature}°${temperatureUnit}`
    );
    cy.get('[data-cy="weather-text"]').should("have.text", weatherText);
  });

  it("should render loading", () => {
    location.pending = true;

    cy.mount(
      <>
        <Theme>
          <WeatherNowCard
            climateConditions={currentClimateConditions}
            location={location}
          />
        </Theme>
      </>
    );

    cy.get('[data-cy="loading-message"]').should(
      "have.text",
      "Esperando localização"
    );
  });
});
