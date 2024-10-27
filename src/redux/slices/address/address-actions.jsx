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

export const getCities = createAsyncThunk(
  "getCities",
  async (country = "1") => {
    try {
      const response = await api.get(
        $U.ADDRESSES + $U.CITIES + `?country=${country}`
      );
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
      const response = await api.get(
        $U.ADDRESSES + $U.TOWNSHIPS + `?city=${city}`
      );
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || "An error occurred");
    }
  }
);

// export const getAddresses = createAsyncThunk("getAddresses", async () => {
//   try {
//     const response = await api.get($U.ADDRESSES + $U.ADDRESSES);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response?.data || "An error occurred");
//   }
// });

export const createAddress = createAsyncThunk(
  "createAddress",
  async (addressData) => {
    try {
      const response = await api.post($U.ADDRESSES + $U.ADDRESSES, addressData);
      return response.data;
    } catch (error) {
      throw new Error(
        error.response?.data.name || "Fields cannot be left blank."
      );
    }
  }
);
