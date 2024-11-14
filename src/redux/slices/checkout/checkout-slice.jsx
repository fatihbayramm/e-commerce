import { createSlice } from "@reduxjs/toolkit";
import {
  getCheckout,
  setAddress,
  setShippingOption,
  setPaymentOption,
  setDiscountCode,
  completeOrder,
  getOrders,
} from "./checkout-actions";

const initialState = {
  checkout: [],
  address: {},
  shipping: [],
  payment: [],
  discount_code: {},
  order_number: null,
  orders: [],
  loading: false,
  error: null,
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

    // setDiscountCode()

    builder.addCase(setDiscountCode.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(setDiscountCode.fulfilled, (state, action) => {
      state.loading = false;
      state.discount_code = action.payload;
    });

    builder.addCase(setDiscountCode.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // completeOrder()

    builder.addCase(completeOrder.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(completeOrder.fulfilled, (state, action) => {
      state.loading = false;
      state.order_number = action.payload;
    });

    builder.addCase(completeOrder.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // getOrders()

    builder.addCase(getOrders.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOrders.fulfilled, (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    });

    builder.addCase(getOrders.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default checkoutSlice.reducer;
