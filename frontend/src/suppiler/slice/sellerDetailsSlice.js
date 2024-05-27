import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Fetch individual seller details
export const fetchSellerDetails = createAsyncThunk(
  'sellerDetails/fetchSellerDetails',
  async (sellerId, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/sellers/${sellerId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch seller details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const fetchActiveSellers = createAsyncThunk('sellers/fetchActiveSellers', async () => {
  const response = await axios.get('http://localhost:8086/sellers/active');
  return response.data;
});

export const fetchSuspendedSellers = createAsyncThunk('sellers/fetchSuspendedSellers', async () => {
  const response = await axios.get('http://localhost:8086/sellers/suspended');
  return response.data;
});

export const suspendSeller = createAsyncThunk('sellers/suspendSeller', async (sellerId) => {
  const response = await axios.put(`http://localhost:8086/sellers/suspend/${sellerId}`);
  return response.data;
});

export const deactivateSeller = createAsyncThunk('sellers/deactivateSeller', async (sellerId) => {
  const response = await axios.put(`http://localhost:8086/sellers/deactivate/${sellerId}`);
  return response.data;
});

// Submit new seller details
export const submitSellerDetails = createAsyncThunk(
  'sellerDetails/submitSellerDetails',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8086/sellers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to submit seller details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

// Update seller details in the database
export const updateSellerDetailsInDB = createAsyncThunk(
  'sellerDetails/updateSellerDetailsInDB',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:8086/sellers/${formData.sellerId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        throw new Error('Failed to update seller details');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  sellerDetails: {},
  activeSellers: [],
  suspendedSellers: [],
  status: 'idle',
  error: null,
};

const sellerDetailsSlice = createSlice({
  name: 'sellerDetails',
  initialState,
  reducers: {
    updateSellerDetails(state, action) {
      return { ...state, sellerDetails: { ...state.sellerDetails, ...action.payload } };
    },
    resetSellerDetails() {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchSellerDetails
      .addCase(fetchSellerDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSellerDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sellerDetails = action.payload;
      })
      .addCase(fetchSellerDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
      })
      
      .addCase(fetchActiveSellers.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchActiveSellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.activeSellers = action.payload;
    })
    .addCase(fetchActiveSellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
    .addCase(fetchSuspendedSellers.pending, (state) => {
        state.status = 'loading';
    })
    .addCase(fetchSuspendedSellers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.suspendedSellers = action.payload;
    })
    .addCase(fetchSuspendedSellers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
    })
    .addCase(suspendSeller.fulfilled, (state, action) => {
        // Optionally update state after suspend
    })
    .addCase(deactivateSeller.fulfilled, (state, action) => {
        // Optionally update state after deactivate
    })
      // Handle submitSellerDetails
      .addCase(submitSellerDetails.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitSellerDetails.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Seller details submitted successfully:', action.payload);
      })
      .addCase(submitSellerDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
        console.error('Failed to submit seller details:', action.payload);
      })
      // Handle updateSellerDetailsInDB
      .addCase(updateSellerDetailsInDB.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateSellerDetailsInDB.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sellerDetails = { ...state.sellerDetails, ...action.payload };
        console.log('Seller details updated successfully:', action.payload);
      })
      .addCase(updateSellerDetailsInDB.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload.error;
        console.error('Failed to update seller details:', action.payload);
      });
  }
});

export const { updateSellerDetails, resetSellerDetails } = sellerDetailsSlice.actions;
export default sellerDetailsSlice.reducer;
