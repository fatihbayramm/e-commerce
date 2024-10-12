import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product/product-slice";
import authReducer from "./slices/auth/auth-slice";
import basketReducer from "./slices/basket/basket-slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    basket: basketReducer,
  },
});
