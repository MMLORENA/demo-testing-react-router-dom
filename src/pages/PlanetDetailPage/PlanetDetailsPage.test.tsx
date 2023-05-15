import { screen } from "@testing-library/react";
import { vi } from "vitest";
import paths from "../../routers/paths";
import routerRender from "../../testUtils/routerRender/routerRender";

vi.mock("react-router-dom", async () => ({
  ...((await vi.importActual("react-router-dom")) as object),
  useParams: () => ({
    id: 1,
  }),
}));

describe("Given a PlanetDetailsPage", () => {
  describe("When it's rendered and recives id 1 from params", () => {
    test("Then it should show a heading level 1 with text 'Planet id: 1'", () => {
      const headingData = {
        name: /planet id: 1/i,
        level: 1,
      };

      routerRender({
        initialEntries: [`${paths.planet}/1`],
      });

      const heading = screen.getByRole("heading", headingData);

      expect(heading).toBeInTheDocument();
    });
  });
});
