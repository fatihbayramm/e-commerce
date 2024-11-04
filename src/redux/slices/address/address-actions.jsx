import $U from "../../../config/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";

export const getCountries = createAsyncThunk("getCountries", async () => {
  try {
    const response = await api.get($U.COUNTRIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const getCities = createAsyncThunk(
  "getCities",
  async (country = "1") => {
    try {
      const response = await api.get($U.CITIES + `?country=${country}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

export const getTownships = createAsyncThunk(
  "getTownships",
  async (city = "1") => {
    try {
      const response = await api.get($U.TOWNSHIPS + `?city=${city}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

export const getAddresses = createAsyncThunk("getAddresses", async () => {
  try {
    const response = await api.get($U.ADDRESSES);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const createAddress = createAsyncThunk(
  "createAddress",
  async (addressData) => {
    try {
      const response = await api.post($U.ADDRESSES, addressData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Fields cannot be left blank.");
    }
  }
);

export const updateAddress = createAsyncThunk(
  "updateAddress",
  async ({ id, values }) => {
    try {
      const response = await api.put($U.ADDRESSES + `${id}/`, values);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Fields cannot be left blank.");
    }
  }
);

export const deleteAddress = createAsyncThunk(
  "deleteAddress",
  async (addressId) => {
    try {
      const response = await api.delete($U.ADDRESSES + `/${addressId}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "Fields cannot be left blank.");
    }
  }
);
