import { createSlice } from "@reduxjs/toolkit";
import {
  getCheckout,
  setAddress,
  setShippingOption,
  setPaymentOption,
} from "./checkout-actions";

const initialState = {
  checkout: [],
  address: [],
  shipping: [],
  payment: [],
  discount: [],
  order: [],
  loading: false,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getCheckout()

    builder.addCase(getCheckout.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCheckout.fulfilled, (state, action) => {
      state.loading = false;
      state.checkout = action.payload;
    });

    builder.addCase(getCheckout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // setAddress()

    builder.addCase(setAddress.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(setAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.address = action.payload;
    });

    builder.addCase(setAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // setShippingOption()

    builder.addCase(setShippingOption.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(setShippingOption.fulfilled, (state, action) => {
      state.loading = false;
      state.shipping = action.payload;
    });

    builder.addCase(setShippingOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // setPaymentOption()

    builder.addCase(setPaymentOption.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(setPaymentOption.fulfilled, (state, action) => {
      state.loading = false;
      state.payment = action.payload;
    });

    builder.addCase(setPaymentOption.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default checkoutSlice.reducer;
