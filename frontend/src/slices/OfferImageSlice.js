import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  offerImagesList: [],
  error: "",
  status: "idle",
};

export const getOfferImagesFromJson = createAsyncThunk(
  "offerImages/getOfferImagesFromJson",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/offerimages");
      if (!response.ok) throw new Error("No offers found");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addOfferImageToJson = createAsyncThunk(
  "offerImages/addOfferImageToJson",
  async (offerImage, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/offerimages", {
        method: "POST",
        body: JSON.stringify(offerImage),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to add offer image");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteOfferImageInJson = createAsyncThunk(
  "offerImages/deleteOfferImageInJson",
  async (offerId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/offerimages/${offerId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete offer");
      return { offerId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const offerImageSlice = createSlice({
  name: "offerImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOfferImagesFromJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getOfferImagesFromJson.fulfilled, (state, action) => {
        state.offerImagesList = action.payload;
        state.status = "succeeded";
      })
      .addCase(getOfferImagesFromJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
        state.offerImagesList = [];
      })
      .addCase(addOfferImageToJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(addOfferImageToJson.fulfilled, (state, action) => {
        state.offerImagesList.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addOfferImageToJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      })
      .addCase(deleteOfferImageInJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(deleteOfferImageInJson.fulfilled, (state, action) => {
        state.offerImagesList = state.offerImagesList.filter(
          (offer) => offer.id !== action.payload.offerId
        );
        state.status = "succeeded";
      })
      .addCase(deleteOfferImageInJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      });
  },
});

export default offerImageSlice.reducer;
