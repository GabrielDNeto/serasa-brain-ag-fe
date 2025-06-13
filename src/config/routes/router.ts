import { createBrowserRouter } from "react-router";
import Dashboard from "../../pages/dashboard";
import PagesTemplate from "../../components/templates/PagesTemplate";

export const ROUTER = createBrowserRouter([
  {
    Component: PagesTemplate,
    children: [
      {
        path: "/dashboard",
        Component: Dashboard,
      },
    ],
  },
]);
