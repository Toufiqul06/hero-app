import { createBrowserRouter } from "react-router-dom"; 
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps"; 
import AppsDetails from "../pages/AppsDetails";
import Installation from "../pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
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
    ],
  },
]);

export default router;
