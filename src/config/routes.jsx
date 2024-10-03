import { createBrowserRouter } from "react-router-dom";
import ProductDetail from "../pages/product-detail";
import Home from "../pages/home";
import Login from "../auth/login";
import Register from "../auth/register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product-detail/:id",
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
