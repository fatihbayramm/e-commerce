import $U from "../../../config/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";

export const getCheckout = createAsyncThunk("getCheckout", async () => {
  try {
    const response = await api.get($U.CHECKOUT);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const setAddress = createAsyncThunk("setAddress", async (address) => {
  try {
    const response = await api.post($U.SET_ADDRESS, address);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const setShippingOption = createAsyncThunk(
  "setShippingOption",
  async (data) => {
    try {
      const response = await api.post($U.SET_SHIPPING, data);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);
