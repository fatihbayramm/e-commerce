import routes from "./config/routes.jsx";
import { createRoot } from "react-dom/client";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>
);
