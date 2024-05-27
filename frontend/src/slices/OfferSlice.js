import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  offerList: [],
  selectedOffer: {},
  error: "",
  status: "idle",
};

export const getOffersFromJson = createAsyncThunk(
  "offers/getOffersFromJson",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/offers");
      if (!response.ok) throw new Error("No offers found");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addOfferToJson = createAsyncThunk(
  "offers/addOfferToJson",
  async (offer, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/offers", {
        method: "POST",
        body: JSON.stringify(offer),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to add offer");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateOfferInJson = createAsyncThunk(
  "offers/updateOfferInJson",
  async (offer, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/offers/${offer.id}`, {
        method: "PUT",
        body: JSON.stringify(offer),
        headers: { "Content-Type": "application/json" },
      });
      console.log(offer);
      if (!response.ok) throw new Error("Failed to update offer");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOfferInJson = createAsyncThunk(
    "offers/deleteOfferInJson",
    async (offer, { rejectWithValue }) => {
        console.log(offer);
      try {
        const response = await fetch(`http://localhost:8086/offers/${offer}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete offer");
        return { offer };
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

export const OfferSlice = createSlice({
  name: "OfferSlice",
  initialState,
  reducers: {
    setSelectedOffer: (state, action) => {
      state.selectedOffer = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOffersFromJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getOffersFromJson.fulfilled, (state, action) => {
        state.offerList = action.payload;
        state.status = "succeeded";
      })
      .addCase(getOffersFromJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
        state.offerList = [];
      })
      .addCase(addOfferToJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(addOfferToJson.fulfilled, (state, action) => {
        state.offerList.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addOfferToJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      })
      .addCase(updateOfferInJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(updateOfferInJson.fulfilled, (state, action) => {
        const index = state.offerList.findIndex(offer => offer.id === action.payload.id);
        if (index !== -1) {
          state.offerList[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateOfferInJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      })
      .addCase(deleteOfferInJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(deleteOfferInJson.fulfilled, (state, action) => {
        state.offerList = state.offerList.filter(offer => offer.id !== action.payload.id);
        state.status = "succeeded";
      })
      .addCase(deleteOfferInJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      });
  },
});

export const { setSelectedOffer } = OfferSlice.actions;

export default OfferSlice.reducer;
