import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchAllPayments = createAsyncThunk(
    'payments/fetchAllPayments',
    async (_, { rejectWithValue }) => {
      try {
        const response = await fetch("http://localhost:8086/payment", {
          method: "GET",
          mode: "cors",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Something went wrong while fetching payments");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );
  export const fetchTotalRevenue = createAsyncThunk(
    'payments/fetchTotalRevenue',
    async () => {
      const response = await fetch("http://localhost:8086/payment/total-revenue", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch total revenue');
      }
      return response.json();
    }
  );
  const paymentSlice = createSlice({
    name: 'payments',
    initialState: {
      payments: [],
      totalRevenue: 0,
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Fetch all products
        .addCase(fetchAllPayments.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchAllPayments.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.payments = action.payload;
        })
        .addCase(fetchAllPayments.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.payload;
        })
        .addCase(fetchTotalRevenue.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchTotalRevenue.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.totalRevenue = action.payload;
          })
          .addCase(fetchTotalRevenue.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
    },
  });

  export default paymentSlice.reducer;