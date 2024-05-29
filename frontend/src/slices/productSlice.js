import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchApprovedProducts = createAsyncThunk(
  'products/fetchApprovedProducts',
  async (_, { rejectWithValue }) => {
      try {
          const response = await fetch("http://localhost:8086/products/approvedd", {
              method: "GET",
              mode: "cors",
              credentials: "same-origin",
              headers: { "Content-Type": "application/json" },
          });
          if (!response.ok) {
              throw new Error("Something went wrong while fetching approved products");
          }
          const data = await response.json();
          return data;
      } catch (error) {
          return rejectWithValue(error.message);
      }
  }
);
// Async thunk for fetching all products
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/products", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went wrong while fetching products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getAvailableProducts = createAsyncThunk(
  'products/getAvailableProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/products/availableproducts", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went wrong while fetching products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getTotalProducts = createAsyncThunk(
  'products/getTotalProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/products/totalproducts", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went wrong while fetching products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getOutofStockProducts = createAsyncThunk(
  'products/getOutofStockProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/products/outofstockproducts", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Something went wrong while fetching products");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for deleting a product
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (productId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/products/${productId}`, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
      });
      if (!response.ok) {
        throw new Error("Something went wrong while deleting the product");
      }
      return productId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for adding a product
export const addProduct = createAsyncThunk(
  'products/addProduct',
  async ({ category, productData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/products/${category}`, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong while adding the product");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for updating a product
export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ category,productData }, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/products/${category}/${productData.productId}`, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error("Something went wrong while updating the product");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const approveProduct = createAsyncThunk(
  'products/approveProduct',
  async (productId, { rejectWithValue }) => {
      try {
          const response = await fetch(`http://localhost:8086/products/approve/${productId}`, {
              method: "PUT",
              mode: "cors",
              credentials: "same-origin"
          });
          if (!response.ok) {
              throw new Error("Failed to approve product");
          }
          const data = await response.json();
          return data;
      } catch (error) {
          return rejectWithValue({ error: error.message });
      }
  }
);
export const rejectProduct = createAsyncThunk(
  'products/rejectProduct',
  async (productId, { rejectWithValue }) => {
      try {
          const response = await fetch(`http://localhost:8086/products/reject/${productId}`, {
              method: "PUT",
              mode: "cors",
              credentials: "same-origin"
          });
          if (!response.ok) {
              throw new Error("Failed to approve product");
          }
          const data = await response.json();
          return data;
      } catch (error) {
          return rejectWithValue({ error: error.message });
      }
  }
);

// Thunk to fetch pending products using fetch
export const fetchPendingProducts = createAsyncThunk(
  'products/fetchPendingProducts',
  async () => {
      const response = await fetch('http://localhost:8086/products/pending', {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
  }
);
export const fetchProductSales = createAsyncThunk(
  'products/fetchProductSales',
  async () => {
      const response = await fetch('http://localhost:8086/products/sales', {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json();
  }
);

// Product slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    sales:[],
    totalProducts:[],
    availableProducts:[],
    outofStockProducts:[],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Delete a product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Add a product
      .addCase(addProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Update a product
      .addCase(updateProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const index = state.products.findIndex(product => product.id === action.payload.id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      //total products
      .addCase(getTotalProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTotalProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.totalProducts = action.payload;
      })
      .addCase(getTotalProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(getAvailableProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAvailableProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.availableProducts = action.payload;
      })
      .addCase(getAvailableProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Fetch out of stock products
      .addCase(getOutofStockProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOutofStockProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.outofStockProducts = action.payload;
      })
      .addCase(getOutofStockProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchApprovedProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApprovedProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchApprovedProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(approveProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
        state.error = "";
      })
      .addCase(approveProduct.rejected, (state, action) => {
          state.error = action.payload.error;
      })
      .addCase(fetchPendingProducts.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchPendingProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
    })
    .addCase(fetchPendingProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
    .addCase(fetchProductSales.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchProductSales.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sales = action.payload;
    })
    .addCase(fetchProductSales.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;