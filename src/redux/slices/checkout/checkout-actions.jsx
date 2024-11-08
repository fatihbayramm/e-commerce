import $U from "../../../config/urls";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axios";

export const setAddress = createAsyncThunk("setAddress", async (address) => {
  try {
    const response = await api.post($U.SET_ADDRESS, address);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data || "An error occurred");
  }
});
