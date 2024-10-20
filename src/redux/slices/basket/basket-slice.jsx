import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $U from "../../../config/urls";
import { api } from "../../../config/axios";

const initialState = {
  basket: [],
  loading: false,
  error: null,
};

export const getBasket = createAsyncThunk("getBasket", async () => {
  try {
    const response = await api.get($U.BASKET);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.response?.data.message || "An error occurred");
  }
});

export const addProductToBasket = createAsyncThunk(
  "addProductToBasket",
  async ({ productData }) => {
    try {
      const response = await api.post($U.BASKET, productData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
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
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);

export const removeProductFromBasket = createAsyncThunk(
  "removeProductFromBasket",
  async ({ product }) => {
    try {
      console.log(product);
      const response = await api.delete($U.BASKET, {
        data: product,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // getBasket()

    builder.addCase(getBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(getBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // addProductToBasket()

    builder.addCase(addProductToBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(addProductToBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(addProductToBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // updateProductInBasket()

    builder.addCase(updateProductInBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(updateProductInBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(updateProductInBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // removeProductFromBasket()

    builder.addCase(removeProductFromBasket.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(removeProductFromBasket.fulfilled, (state, action) => {
      state.loading = false;
      state.basket = action.payload;
    });

    builder.addCase(removeProductFromBasket.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default basketSlice.reducer;
