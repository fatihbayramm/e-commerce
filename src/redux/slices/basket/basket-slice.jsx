import { createSlice } from "@reduxjs/toolkit";
import {
  getBasket,
  addProductToBasket,
  updateProductInBasket,
  removeProductFromBasket,
} from "./basket-actions";

const initialState = {
  basket: [],
  loading: false,
  error: null,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getBasket()

    builder.addCase(getBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(getBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // addProductToBasket()

    builder.addCase(addProductToBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProductToBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(addProductToBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // updateProductInBasket()

    builder.addCase(updateProductInBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateProductInBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(updateProductInBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // removeProductFromBasket()

    builder.addCase(removeProductFromBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(removeProductFromBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(removeProductFromBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default basketSlice.reducer;
