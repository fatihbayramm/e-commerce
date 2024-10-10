import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import $U from "../../../config/urls";

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  loading: false,
  error: null,
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  try {
    const response = await axios.get($U.PRODUCTS);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "An error occurred");
  }
});

export const filterProducts = createAsyncThunk(
  "filterProducts",
  async ({ min = "", max = "", categoryId = "" }) => {
    try {
      const response = await axios.get(
        `${$U.PRODUCTS}?price_min=${min}&price_max=${max}&category=${categoryId}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async ({ query }) => {
    try {
      const response = await axios.get(`${$U.PRODUCTS}?query=${query}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  // TODO: sepet islemlerini reducers kisminda yapabilirsin: addProduct, removeProduct...
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
