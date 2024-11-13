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
  async (shippingOption) => {
    try {
      const response = await api.post($U.SET_SHIPPING, shippingOption);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

export const setPaymentOption = createAsyncThunk(
  "setPaymentOption",
  async (paymentOption) => {
    try {
      const response = await api.post($U.SET_PAYMENT, paymentOption);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

export const setDiscountCode = createAsyncThunk(
  "setDiscountCode",
  async (discountCode) => {
    try {
      const response = await api.post($U.SET_DISCOUNT, discountCode);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "Invalid discount code");
    }
  }
);

export const completeOrder = createAsyncThunk("completeOrder", async () => {
  try {
    const response = await api.post($U.COMPLETE_ORDER);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "Invalid discount code");
  }
});

export const getOrders = createAsyncThunk("getOrders", async () => {
  try {
    const response = await api.get($U.ORDERS);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data.message || "Invalid discount code");
  }
});
