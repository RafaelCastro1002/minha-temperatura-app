import { BrowserRouter } from "react-router-dom";
import Header from ".";
import Theme from "../../theme";
import routes from "../../routes";

describe("<Header />", () => {
  it("should render correctly router options", () => {
    const allRoutes = routes;

    cy.mount(
      <>
        <Theme>
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </Theme>
      </>
    );

    for (const router of allRoutes) {
      const { id } = router;

      cy.get(`[data-cy="${id}"]`).should("have.text", id);
    }
  });
});
