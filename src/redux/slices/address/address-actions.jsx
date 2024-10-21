import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";
import $U from "../../../config/urls";

export const getCountries = createAsyncThunk("getCountries", async () => {
  try {
    const response = await api.get($U.ADDRESSES + $U.COUNTRIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const getCities = createAsyncThunk("getCities", async () => {
  try {
    const response = await api.get($U.ADDRESSES + $U.CITIES);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});

export const getTownships = createAsyncThunk("getTownships", async () => {
  try {
    const response = await api.get($U.ADDRESSES + $U.TOWNSHIPS);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});
