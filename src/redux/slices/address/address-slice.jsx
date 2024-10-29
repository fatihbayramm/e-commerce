import { createSlice } from "@reduxjs/toolkit";
import {
  createAddress,
  getCities,
  getCountries,
  getTownships,
  getAddresses,
  updateAddress,
} from "./address-actions";

const initialState = {
  address: {
    countries: [],
    cities: [],
    townships: [],
  },
  createdAddress: [],
  userAddresses: [],
  updatedAddress: [],
  loading: false,
  error: null,
};

export const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getCountries()

    builder.addCase(getCountries.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCountries.fulfilled, (state, action) => {
      state.loading = false;
      state.address.countries = action.payload;
    });

    builder.addCase(getCountries.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // getCities()

    builder.addCase(getCities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getCities.fulfilled, (state, action) => {
      state.loading = false;
      state.address.cities = action.payload;
    });

    builder.addCase(getCities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // getTownships()

    builder.addCase(getTownships.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getTownships.fulfilled, (state, action) => {
      state.loading = false;
      state.address.townships = action.payload;
    });

    builder.addCase(getTownships.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // createAddress()

    builder.addCase(createAddress.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.createdAddress = action.payload;
    });

    builder.addCase(createAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // getAddresses()

    builder.addCase(getAddresses.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getAddresses.fulfilled, (state, action) => {
      state.loading = false;
      state.userAddresses = action.payload;
    });

    builder.addCase(getAddresses.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // updatedAddress()

    builder.addCase(updateAddress.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateAddress.fulfilled, (state, action) => {
      state.loading = false;
      state.updatedAddress = action.payload;
    });

    builder.addCase(updateAddress.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default addressSlice.reducer;
