import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/product-detail";
import Home from "../pages/home";
import Login from "../auth/login";
import Register from "../auth/register";
import $U from "../config/urls";

const routes = createBrowserRouter([
  {
    path: $U.HOME,
    element: <Home />,
  },
  {
    path: $U.PRODUCT_DETAIL + ":id",
    element: <ProductDetail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
