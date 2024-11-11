import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Goals from "../Pages/Goals";
import CreateGoals from "../Pages/CreateGoals";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Goals />,
      },
      {
        index: true,
        element: <CreateGoals />,
        path: "create",
      },
    ],
  },
]);
