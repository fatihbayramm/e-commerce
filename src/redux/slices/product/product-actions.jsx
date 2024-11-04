import $U from "../../../config/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";

export const getAllProducts = createAsyncThunk("getAllProducts", async () => {
  try {
    const response = await api.get($U.PRODUCTS);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "An error occurred");
  }
});

export const filterProducts = createAsyncThunk(
  "filterProducts",
  async ({ min = "", max = "", categoryId = "" }) => {
    try {
      const response = await api.get(
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
      const response = await api.get(`${$U.PRODUCTS}?query=${query}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);
