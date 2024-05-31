import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Define an async thunk to fetch carts from the backend
export const fetchCarts = createAsyncThunk(
  "carts/fetchCarts",
  async (customerId) => {
    const response = await fetch(
      `http://localhost:8086/horizon/customer/cart/${customerId}`
    ); // Assume customerId is 1 for this example
    const data = await response.json();
    return data;
  }
);
export const addItemToCart = createAsyncThunk(
  "carts/addItemToCart",
  async ({ customerId, productCard }) => {
    console.log("Sending request to add item to cart");
    console.log("Product Card:", productCard);
    console.log("Customer ID:", customerId);

    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customer/cart/${customerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productCard),
        }
      );

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      console.log("Received response from server");

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding item to cart:", error);
      throw error;
    }
  }
);

// Define an async thunk to update a cart item
export const updateCart = createAsyncThunk("carts/updateCart", async (cart) => {
  const response = await fetch(
    `http://localhost:8086/horizon/customer/cart/${cart.customerId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    }
  );
  const data = await response.json();
  return data;
});

export const increaseQuantity = createAsyncThunk(
  "carts/increaseQuantity",
  async ({ customerId, productId }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customer/cart/${customerId}/${productId}/increase`,
        {
          method: "PUT",
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error: ${response.status}, ${errorText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error in increaseQuantity:", error);
      throw error;
    }
  }
);


export const decreaseQuantity = createAsyncThunk(
  "carts/decreaseQuantity",
  async ({ customerId, productId }) => {
    const response = await fetch(
      `http://localhost:8086/horizon/customer/cart/${customerId}/${productId}/decrease`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();
    return data;
  }
);

export const removeItem = createAsyncThunk(
  "carts/removeItem",
  async ({ customerId, productId }) => {
    await fetch(
      `http://localhost:8086/horizon/customer/cart/${customerId}/${productId}`,
      {
        method: "DELETE",
      }
    );
    return productId;
  }
);

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setItemsFromSession: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(increaseQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(increaseQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(increaseQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(decreaseQuantity.pending, (state) => {
        state.status = "loading";
      })
      .addCase(decreaseQuantity.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(decreaseQuantity.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(removeItem.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })
      .addCase(addItemToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setItemsFromSession } = cartSlice.actions;

export default cartSlice.reducer;
