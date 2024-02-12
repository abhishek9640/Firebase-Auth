import {
    createBrowserRouter,
  } from "react-router-dom";

  import Login from "../Pages/login";
  import Register from "../Pages/register";
  import HomeLayouts from "../layouts/HomeLayouts";
  import Forgot from "../Pages/Forgot";

export const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/home",
      element: <HomeLayouts />
    },
    {
      path: "/forgot",
      element: <Forgot />
    }
  ]);

