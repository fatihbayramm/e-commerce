import { createSlice } from "@reduxjs/toolkit";
import { getCities, getCountries, getTownships } from "./address-actions";

const initialState = {
  address: {
    countries: [],
    cities: [],
    townships: [],
  },
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
  },
});

export default addressSlice.reducer;
