import $U from "../../../config/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";

export const getBasket = createAsyncThunk("getBasket", async () => {
  try {
    const response = await api.get($U.BASKET);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const addProductToBasket = createAsyncThunk(
  "addProductToBasket",
  async ({ productData }) => {
    try {
      const response = await api.post($U.BASKET, productData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

export const updateProductInBasket = createAsyncThunk(
  "updateProductInBasket",
  async ({ productData }) => {
    try {
      const response = await api.put($U.BASKET, productData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.quantity || "An error occurred");
    }
  }
);

export const removeProductFromBasket = createAsyncThunk(
  "removeProductFromBasket",
  async ({ product }) => {
    try {
      const response = await api.delete($U.BASKET, {
        data: product,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);
