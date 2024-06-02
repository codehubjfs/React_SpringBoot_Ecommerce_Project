import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  addressList: [],
  selectedAddress: {},
  isLoading: false,
  status: 'idle',
  error: "",
};

// Async thunks for fetching, adding, updating, and removing addresses
export const getAddressesFromJson = createAsyncThunk(
  'addresses/getAddressesFromJson',
  async (customerId, { rejectWithValue }) => {
    if (!customerId) {
      return rejectWithValue({ error: 'customerId is undefined' });
    }
    try {
      const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}/addresses`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        return rejectWithValue({ error: 'No Addresses found' });
      }
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const addAddressToJson = createAsyncThunk(
  'addresses/addAddressToJson',
  async ({ customerId, address }, { rejectWithValue }) => {
    if (!customerId) {
      return rejectWithValue({ error: 'customerId is undefined' });
    }
    try {
      const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}/addresses`, {
        method: 'POST',
        body: JSON.stringify(address),
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        return rejectWithValue({ error: errorData.message });
      }
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

export const updateAddressInJson = createAsyncThunk(
  'addresses/updateAddressInJson',
  async ({ customerId, addressId, updatedAddress }, { rejectWithValue }) => {
    if (!customerId) {
      return rejectWithValue({ error: 'customerId is undefined' });
    }
    try {
      const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}/addresses/${addressId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedAddress), // Corrected line
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Updated address details:', data);
        return data;
      } else {
        const errorData = await response.json();
        console.error('Error updating address:', errorData.message);
        return rejectWithValue({ error: errorData.message });
      }
    } catch (error) {
      console.error('Error updating address:', error.message);
      return rejectWithValue({ error: error.message });
    }
  }
);


export const removeAddressFromJson = createAsyncThunk(
  'addresses/removeAddressFromJson',
  async ({ customerId, addressId }, { rejectWithValue }) => {
    console.log('removeAddressFromJson thunk called with:', { customerId, addressId });
    if (!customerId || !addressId) {
      return rejectWithValue('Customer ID or Address ID is undefined');
    }
    try {
      const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}/addresses/${addressId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response from server:', errorData);
        return rejectWithValue({ error: errorData.message });
      }
      return addressId;
    } catch (error) {
      console.error('Error during fetch:', error.message);
      return rejectWithValue({ error: error.message });
    }
  }
);


// Address slice with reducers and extraReducers for handling actions
const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddressesFromJson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAddressesFromJson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.addressList = action.payload;
      })
      .addCase(getAddressesFromJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        state.isLoading = false;
        state.addressList = [];
      })
      .addCase(addAddressToJson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addAddressToJson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.addressList.push(action.payload);
      })
      .addCase(addAddressToJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        state.isLoading = false;
      })
      .addCase(updateAddressInJson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateAddressInJson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.addressList = state.addressList.map((address) =>
          address.id === action.payload.id ? action.payload : address
        );
      })
      .addCase(updateAddressInJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        console.error('Update address rejected:', state.error); // Log the error message
        state.isLoading = false;
      })
      
      .addCase(removeAddressFromJson.pending, (state) => {
        state.isLoading = true;
        state.status = 'loading';
      })
      .addCase(removeAddressFromJson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = 'succeeded';
        state.addressList = state.addressList.filter((address) => address.id !== action.payload);
      })
      .addCase(removeAddressFromJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        state.isLoading = false;
        state.status = 'failed';
      });
  }
});
export const { setSelectedAddress } = addressSlice.actions;

export default addressSlice.reducer;