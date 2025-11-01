import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps"; 
import AppsDetails from "../pages/AppsDetails";
import Installation from "../pages/Installation";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "apps",
        Component: AllApps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "app/:id",
        Component: AppsDetails,
      },
      {
        path: "*",
        Component:Error,
      },
    ],
  },
]);

export default router;
