import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (customerId) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customer/wishlist/${customerId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch wishlist: " + response.statusText);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log("Error fetching wishlist:", error);
      throw error;
    }
  }
);

export const addItemToWishlist = createAsyncThunk(
  "wishlist/addItem",
  async ({ ProductCard, customerId }) => {
    try {
      console.log("Payload sent to server:", ProductCard); // Log payload

      const response = await fetch(
        `http://localhost:8086/horizon/customer/wishlist/${customerId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ProductCard),
        }
      );
      if (!response.ok) {
        throw new Error(
          "Failed to add item to wishlist: " + response.statusText
        );
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error adding item to wishlist:", error);
      throw error;
    }
  }
);

export const removeItemFromWishlist = createAsyncThunk(
  "wishlist/removeItem",
  async ({ id, customerId }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customer/wishlist/${customerId}/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(
          "Failed to remove item from wishlist: " + response.statusText
        );
      }
      return id;
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
      throw error;
    }
  }
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addItemToWishlist.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(removeItemFromWishlist.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default wishlistSlice.reducer;
