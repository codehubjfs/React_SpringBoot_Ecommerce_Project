import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    categories: [],
    status: 'idle',
    error: null,
};

export const fetchCategories = createAsyncThunk(
    'categories/fetchCategory',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8086/category", {
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

const categorySlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.categories = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;