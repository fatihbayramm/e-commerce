import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import $U from "../../../config/urls";
import { api } from "../../../components/axios";

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
  async ({ productData, token }) => {
    try {
      const response = await axios.put($U.BASKET, productData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data.message || "An error occurred");
    }
  }
);

export const removeProductFromBasket = createAsyncThunk(
  "removeProductFromBasket",
  async ({ productId }) => {
    try {
      console.log(productId);
      const response = await api.delete($U.BASKET, {
        data: productId,
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
