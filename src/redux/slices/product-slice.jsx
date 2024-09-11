import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  filteredProducts: [],
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
  async ({ min = 0, max = 99999 }) => {
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
  },
});

export default productSlice.reducer;
