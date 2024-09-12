import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [],
  searchedProducts: [],
  loading: false,
};

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  try {
    const response = await axios.get("/api/products/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const filterProducts = createAsyncThunk(
  "filterProducts",
  async ({ min, max }) => {
    try {
      const response = await axios.get(
        `/api/products/?price_min=${min}&price_max=${max}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const searchProducts = createAsyncThunk(
  "searchProducts",
  async ({ query }) => {
    try {
      const response = await axios.get(`/api/products/?query=${query}`);
      if (query === "") {
        getAllProducts();
      }
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });

    builder.addCase(filterProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(filterProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.filteredProducts = action.payload;
    });

    builder.addCase(searchProducts.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(searchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.searchedProducts = action.payload;
    });
  },
});

export default productSlice.reducer;
