import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  sliderImagesList: [],
  error: "",
  status: "idle",
};

export const getSliderImagesFromJson = createAsyncThunk(
  "sliderImages/getSliderImagesFromJson",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/sliders");
      if (!response.ok) throw new Error("No sliders found");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addSliderImageToJson = createAsyncThunk(
  "sliderImages/addSliderImageToJson",
  async (sliderImage, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8086/sliders", {
        method: "POST",
        body: JSON.stringify(sliderImage),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to add slider image");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateSliderImageInJson = createAsyncThunk(
  "sliderImages/updateSliderImageInJson",
  async (sliderImage, { rejectWithValue }) => {
    try {
      // console.log(sliderImage,sliderImage.sliderImageId)
      const response = await fetch(`http://localhost:8086/sliders/${sliderImage.sliderImageId}`, {
        method: "PUT",
        body: JSON.stringify(sliderImage),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) throw new Error("Failed to update slider image");
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteSliderImageInJson = createAsyncThunk(
  "sliderImages/deleteSliderImageInJson",
  async (sliderId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/sliders/${sliderId}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete slider image");
      return { sliderId };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const sliderImageSlice = createSlice({
  name: "sliderImages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSliderImagesFromJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(getSliderImagesFromJson.fulfilled, (state, action) => {
        state.sliderImagesList = action.payload;
        state.status = "succeeded";
      })
      .addCase(getSliderImagesFromJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
        state.sliderImagesList = [];
      })
      .addCase(addSliderImageToJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(addSliderImageToJson.fulfilled, (state, action) => {
        state.sliderImagesList.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(addSliderImageToJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      })
      .addCase(updateSliderImageInJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(updateSliderImageInJson.fulfilled, (state, action) => {
        const index = state.sliderImagesList.findIndex(
          (slider) => slider.id === action.payload.id
        );
        if (index !== -1) {
          state.sliderImagesList[index] = action.payload;
        }
        state.status = "succeeded";
      })
      .addCase(updateSliderImageInJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      })
      .addCase(deleteSliderImageInJson.pending, (state) => {
        state.status = "loading";
        state.error = "";
      })
      .addCase(deleteSliderImageInJson.fulfilled, (state, action) => {
        state.sliderImagesList = state.sliderImagesList.filter(
          (slider) => slider.id !== action.payload.sliderId
        );
        state.status = "succeeded";
      })
      .addCase(deleteSliderImageInJson.rejected, (state, action) => {
        state.error = action.payload || action.error.message;
        state.status = "failed";
      });
  },
});

export default sliderImageSlice.reducer;