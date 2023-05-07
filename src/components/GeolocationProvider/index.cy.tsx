import GeolocationProvider from ".";

describe("<GeolocationProvider />", () => {
  it("should render correctly child", () => {
    const textInChildElement = "Eu sou um filho do GeolocationProvider";

    cy.mount(
      <>
        <GeolocationProvider>
          <div data-cy="child-element">{textInChildElement}</div>
        </GeolocationProvider>
      </>
    );

    cy.get('[data-cy="child-element"]').should("have.text", textInChildElement);
  });
});
