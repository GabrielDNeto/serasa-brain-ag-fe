import RouteGuard from "@/components/providers/RouteGuard";
import CreateOrEditProducerPage from "@/pages/producers/create-or-edit";
import Producers from "@/pages/producers/list";
import Signin from "@/pages/signin";
import { createBrowserRouter, Navigate } from "react-router";
import PagesTemplate from "../../components/templates/PagesTemplate";
import Dashboard from "../../pages/dashboard";
import { APP_ROUTES } from "./constants";
import { CreateOrEditProducerProvider } from "@/contexts/create-or-edit-producer";

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
            path: APP_ROUTES.private.producers.root,
            Component: Producers,
          },
          {
            path: APP_ROUTES.private.producers.create,
            element: (
              <CreateOrEditProducerProvider>
                <CreateOrEditProducerPage />
              </CreateOrEditProducerProvider>
            ),
          },
          {
            path: APP_ROUTES.private.producers.edit,
            element: (
              <CreateOrEditProducerProvider>
                <CreateOrEditProducerPage />
              </CreateOrEditProducerProvider>
            ),
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={APP_ROUTES.private.dashboard} replace />,
  },
]);
