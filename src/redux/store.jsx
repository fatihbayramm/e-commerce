import productReducer from "./slices/product/product-slice";
import authReducer from "./slices/auth/auth-slice";
import basketReducer from "./slices/basket/basket-slice";
import addressReducer from "./slices/address/address-slice";
import checkoutReducer from "./slices/checkout/checkout-slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    product: productReducer,
    auth: authReducer,
    basket: basketReducer,
    address: addressReducer,
    checkout: checkoutReducer,
  },
});
