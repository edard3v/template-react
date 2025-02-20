import App from "@App/App";
import A04 from "@pages/404/404";
import { CONTACT } from "@pages/Contact/config";
import { HOME } from "@pages/Home/config";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <A04 />,
    children: [HOME, CONTACT],
  },
]);
