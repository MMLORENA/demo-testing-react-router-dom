import { InitialEntry } from "@remix-run/router";
import { RenderOptions } from "@testing-library/react";
import { RouterProvider } from "react-router";
import { getBrowserRouter, getMemoryRouter } from "../../routers/routers";
import customRender from "../customRender/customRender";

interface RouterOptions {
  initialEntries?: InitialEntry[];
  ui?: React.ReactElement;
}

const routerRender = (
  routerOptions?: RouterOptions,
  renderOptions?: RenderOptions
) => {
  const router = routerOptions?.initialEntries
    ? getMemoryRouter(routerOptions.initialEntries)
    : getBrowserRouter(routerOptions?.ui);

  return {
    ...customRender(<RouterProvider router={router} />, {
      ...renderOptions,
    }),
  };
};

export default routerRender;
