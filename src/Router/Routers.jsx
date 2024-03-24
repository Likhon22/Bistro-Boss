import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main/Main";
import Home from "./../Pages/Home/Home/Home";
import OurShop from "../Pages/OurShop/OurShop";
import OurMenu from "./../Pages/OurMenu/OurMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/our-shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
    ],
  },
]);
export default router;
