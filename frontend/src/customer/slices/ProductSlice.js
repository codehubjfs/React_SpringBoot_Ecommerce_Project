import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/products/${category}`,
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong while fetching similar products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchSimilarProducts = createAsyncThunk(
  "products/fetchSimilarProducts",
  async (category, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/products/${category}`,
        {
          method: "GET",
          mode: "cors",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong while fetching similar products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async ({ category, id }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/products/${category}/${id}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong while fetching product details");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddresses = createAsyncThunk(
  "addresses/fetchAddresses",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/horizon/customers/${id}`);
      return response.data.addresses; // Adjust based on actual response structure
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    product: null,
    similarProducts: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
      state.status = "succeeded";
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.status = "failed";
    },
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    updateProduct: (state, action) => {
      const { productId, updatedProduct } = action.payload;
      const index = state.items.findIndex(
        (product) => product.productId === productId
      );
      if (index !== -1) {
        state.items[index] = updatedProduct;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchAddresses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchSimilarProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.similarProducts = action.payload; // Correctly assign the fetched similar products
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { setProducts, setError, addProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
