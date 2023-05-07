import Theme from "../../theme";
import UserContext from "../../context/UserContext";
import ImageCityCard from ".";
import { LocationType } from "../../@types/location";
import WeatherBudget from ".";
import WeatherBudgetTypes from "../../@types/components/WeatherBudget";

describe("<WeatherBudget />", () => {
  let location: Partial<LocationType>;

  beforeEach(() => {
    cy.fixture("location").then((response) => {
      location = response;
    });
  });

  it("should render correctly name city", () => {
    const props: WeatherBudgetTypes.Props = {
      iconSrc: "",
      title: "title",
      value: "value",
    };

    cy.mount(
      <>
        <Theme>
          <WeatherBudget
            iconSrc={props.iconSrc}
            title={props.title}
            value={props.value}
          />
        </Theme>
      </>
    );

    cy.get('[data-cy="title-budget"]').should("have.text", props.title);
    cy.get('[data-cy="value-Budget"]').should("have.text", props.value);
  });
});
