import { createSlice } from "@reduxjs/toolkit";
import {
  getAllProducts,
  filterProducts,
  searchProducts,
} from "./product-actions";

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  loading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  // TODO: eger herhangi bir istekte 401 alirsan logout et (cookiden token silmek.).
  reducers: {},
  extraReducers: (builder) => {
    // getAllProducts()
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // filterProducts()

    builder.addCase(filterProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload;
    });

    builder.addCase(filterProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // searchProducts()

    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.searchedProducts = action.payload;
    });

    builder.addCase(searchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
