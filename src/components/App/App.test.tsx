import { screen } from "@testing-library/react";
import paths from "../../routers/paths";
import routerRender from "../../testUtils/routerRender/routerRender";
import App from "./App";

describe("Given App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading level 1 with text 'My Planets' inside", () => {
      const headingData = {
        name: /my planets/i,
        level: 1,
      };

      routerRender();

      const heading = screen.getByRole("heading", headingData);

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's render with path 'create-planets'", () => {
    test("Then it should show a heading level 1 with text 'Create a Planet' inside", () => {
      const headingData = {
        name: /create a planet/i,
        level: 1,
      };

      routerRender({ initialEntries: [paths.create], ui: <App /> });

      const heading = screen.getByRole("heading", headingData);

      expect(heading).toBeInTheDocument();
    });
  });
});
