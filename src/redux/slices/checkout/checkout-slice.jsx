import { createSlice } from "@reduxjs/toolkit";
import { setAddress } from "./checkout-actions";

const initialState = {
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
  },
});

export default checkoutSlice.reducer;
