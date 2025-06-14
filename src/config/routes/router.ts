import { createBrowserRouter } from "react-router";
import Dashboard from "../../pages/dashboard";
import PagesTemplate from "../../components/templates/PagesTemplate";
import { APP_ROUTES } from "./constants";
import Producers from "@/pages/producers";
import Signin from "@/pages/signin";
import RouteGuard from "@/components/providers/RouteGuard";

export const ROUTER = createBrowserRouter([
  {
    Component: RouteGuard,
    children: [
      {
        path: APP_ROUTES.public.signin,
        Component: Signin,
      },
      {
        Component: PagesTemplate,
        children: [
          {
            path: APP_ROUTES.private.dashboard,
            Component: Dashboard,
          },
          {
            path: APP_ROUTES.private.producers,
            Component: Producers,
          },
        ],
      },
    ],
  },
]);
