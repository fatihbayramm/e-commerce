import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/product/product-slice";
import authReducer from "./slices/auth/auth-slice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
  },
});
