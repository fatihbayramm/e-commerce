import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/product-detail";
import Home from "../pages/home";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import $U from "../config/urls";
import Address from "../pages/address";
import AddressList from "../pages/addresses-list";

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
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/address-list",
    element: <AddressList />,
  },
]);

export default routes;
