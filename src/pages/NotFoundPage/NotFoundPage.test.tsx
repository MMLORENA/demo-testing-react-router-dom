import { screen } from "@testing-library/dom";
import customRender from "../../testUtils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When it's render", () => {
    test("Then it should show a heading level 1 ''Page not Found ☠", () => {
      const headingText = /page not Found/i;

      customRender(<NotFoundPage />);

      const heading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
