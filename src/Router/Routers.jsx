import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main/Main";
import Home from "./../Pages/Home/Home/Home";
import OurShop from "../Pages/OurShop/OurShop";
import OurMenu from "./../Pages/OurMenu/OurMenu";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import Dashboard from "../Layout/Dashboard/Dashboard";
import AddItem from "../Pages/Dashboard/AddItem";
import AdminHome from "../Pages/Dashboard/AdminHome";
import ManageItem from "../Pages/Dashboard/ManageItem";
import PrivateRoute from "./PrivateRoute";
import AdminRouter from "./AdminRouter";
import Profile from "../Components/Dashboard/Profile";
import UserHome from "./../Components/Dashboard/UserHome";
import Reservation from "./../Components/Dashboard/Reservation";
import UserCart from "../Components/Dashboard/UserCart";
import UserReview from "../Pages/Dashboard/UserReview";
import ManageUser from "../Pages/Dashboard/ManageUser";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin-home",
        element: (
          <PrivateRoute>
            <AdminRouter>
              <AdminHome></AdminHome>
            </AdminRouter>
          </PrivateRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <PrivateRoute>
            <AdminRouter>
              <AddItem></AddItem>
            </AdminRouter>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-item",
        element: (
          <PrivateRoute>
            <AdminRouter>
              <ManageItem></ManageItem>
            </AdminRouter>
          </PrivateRoute>
        ),
      },
      {
        path: "manage-user",
        element: (
          <PrivateRoute>
            <AdminRouter>
              <ManageUser></ManageUser>
            </AdminRouter>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "user-home",
        element: (
          <PrivateRoute>
            <UserHome></UserHome>
          </PrivateRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "payment-history",
        element: (
          <PrivateRoute>
            <PaymentHistory></PaymentHistory>
          </PrivateRoute>
        ),
      },
      {
        path: "reservation",
        element: (
          <PrivateRoute>
            <Reservation></Reservation>
          </PrivateRoute>
        ),
      },
      {
        path: "user-cart",
        element: (
          <PrivateRoute>
            <UserCart></UserCart>
          </PrivateRoute>
        ),
      },
      {
        path: "add-review",
        element: (
          <PrivateRoute>
            <UserReview></UserReview>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
export default router;
