import Theme from "../../theme";
import WeatherBudget from ".";
import WeatherBudgetTypes from "../../@types/components/WeatherBudget";

describe("<WeatherBudget />", () => {
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
