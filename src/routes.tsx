import { RouteObject } from "react-router-dom";

import Home from "./pages/home/index";
import HistoricalConditions from "./pages/historicalConditions";

const routes: RouteObject[] = [
  {
    id: "Temperatura atual",
    path: "/",
    element: <Home />,
  },
  {
    id: "Últimas 24 horas",
    path: "/historical-conditions",
    element: <HistoricalConditions />,
  },
];

export default routes;
