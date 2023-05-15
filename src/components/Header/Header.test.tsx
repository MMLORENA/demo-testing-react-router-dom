import { screen } from "@testing-library/react";
import routerRender from "../../testUtils/routerRender/routerRender";
import Header from "./Header";

describe("Given a Header Component", () => {
  describe("When is render", () => {
    test("Then it should show two links with text 'Planets' and 'Create' inside", () => {
      const planetsLinkText = /planets/i;
      const createLinkText = /create/i;

      routerRender({ ui: <Header /> });

      const planetsLink = screen.getByRole("link", { name: planetsLinkText });
      const createLink = screen.getByRole("link", { name: createLinkText });

      expect(planetsLink).toBeInTheDocument();
      expect(createLink).toBeInTheDocument();
    });
  });
});
