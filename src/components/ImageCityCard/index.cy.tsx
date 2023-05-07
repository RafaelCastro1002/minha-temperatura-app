import Theme from "../../theme";
import UserContext from "../../context/UserContext";
import ImageCityCard from ".";
import { LocationType } from "../../@types/location";

describe("<ImageCityCard />", () => {
  let location: Partial<LocationType>;

  beforeEach(() => {
    cy.fixture("location").then((response) => {
      location = response;
    });
  });

  it("should render correctly name city", () => {
    cy.mount(
      <>
        <UserContext.Provider
          value={{
            state: {
              location,
            },
            dispatch: () => {},
          }}
        >
          <Theme>
            <ImageCityCard />
          </Theme>
        </UserContext.Provider>
      </>
    );

    cy.get('[data-cy="name-city"]').should(
      "have.text",
      `${location.name} - ${location.state?.name} - ${location.state?.countryId}`
    );
  });
});
