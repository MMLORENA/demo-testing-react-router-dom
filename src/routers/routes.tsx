import { Navigate, RouteObject } from "react-router-dom";
import App from "../components/App/App";
import CreatePlanetPage from "../pages/CreatePlanetPage/CreatePlanetPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PlanetDetailPage from "../pages/PlanetDetailPage/PlanetDetailPage";
import PlanetsPage from "../pages/PlanetsPage/PlanetsPage";
import paths from "./paths";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <App />,
    children: [
      { index: true, element: <Navigate to={paths.planets} replace /> },
      { path: paths.planets, element: <PlanetsPage /> },
      { path: paths.create, element: <CreatePlanetPage /> },
      { path: `${paths.planet}/:id`, element: <PlanetDetailPage /> },
      { path: paths.unkown, element: <NotFoundPage /> },
    ],
  },
];

export default routes;
