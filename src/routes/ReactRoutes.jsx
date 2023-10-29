import { useRoutes } from "react-router-dom";

import { Home } from "../views/Home";
import { Auth } from "../views/Auth";
import { Nominees } from "../views/Nominees";
import { Vote } from "../views/Vote";
import { Congratulations } from "../views/Congratulations";
import { Results } from "../views/Results";
import { NotFound } from "../views/NotFound";

export const ReactRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/auth", element: <Auth /> },
    { path: "/nominees", element: <Nominees /> },
    { path: "/vote", element: <Vote /> },
    { path: "/congratulations", element: <Congratulations /> },
    { path: "/results", element: <Results /> },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};
