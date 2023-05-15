import { InitialEntry } from "@remix-run/router";
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import paths from "./paths";
import routes from "./routes";

export const appRouter = createBrowserRouter(routes);

export const getBrowserRouter = (ui?: React.ReactElement) =>
  ui ? createBrowserRouter([{ path: paths.root, element: ui }]) : appRouter;

export const getMemoryRouter = (initialEntries: InitialEntry[]) =>
  createMemoryRouter(routes, { initialEntries });
