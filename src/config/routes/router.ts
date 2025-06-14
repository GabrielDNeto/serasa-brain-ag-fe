import { createBrowserRouter } from "react-router";
import Dashboard from "../../pages/dashboard";
import PagesTemplate from "../../components/templates/PagesTemplate";
import { APP_ROUTES } from "./constants";
import Producers from "@/pages/producers/list";
import Signin from "@/pages/signin";
import RouteGuard from "@/components/providers/RouteGuard";
import CreateOrEditProducer from "@/pages/producers/create-or-edit";

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
          {
            path: `${APP_ROUTES.private.producers}/create`,
            Component: CreateOrEditProducer,
          },
          {
            path: `${APP_ROUTES.private.producers}/:id`,
            Component: CreateOrEditProducer,
          },
        ],
      },
    ],
  },
]);
