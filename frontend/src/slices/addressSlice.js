import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

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
        body: JSON.stringify(updatedAddress),
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

export const removeAddressFromJson = createAsyncThunk(
  'addresses/removeAddressFromJson',
  async ({ customerId, addressId }, { rejectWithValue }) => {
    if (!customerId || !addressId) {
      return rejectWithValue('Customer ID or Address ID is undefined');
    }
    try {
      const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}/addresses/${addressId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const errorData = await response.json();
        return rejectWithValue({ error: errorData.message });
      }
      return addressId;
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  addressList: [],
  selectedAddress: {},
  isLoading: false,
  status: 'idle',
  error: "",
};

const addressSlice = createSlice({
  name: 'addresses',
  initialState,
  reducers: {
    setSelectedAddress: (state, action) => {
      state.selectedAddress = action.payload;
    },
    setAddresses(state, action) {
      state.addressList = action.payload;
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
        sessionStorage.setItem('addresses', JSON.stringify(action.payload)); // Store addresses in sessionStorage
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
        sessionStorage.setItem('addresses', JSON.stringify(state.addressList)); // Update sessionStorage
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
        sessionStorage.setItem('addresses', JSON.stringify(state.addressList)); // Update sessionStorage
      })
      .addCase(updateAddressInJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        state.isLoading = false;
      })
      .addCase(removeAddressFromJson.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeAddressFromJson.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addressList = state.addressList.filter((address) => address.id !== action.payload);
        sessionStorage.setItem('addresses', JSON.stringify(state.addressList)); // Update sessionStorage
      })
      .addCase(removeAddressFromJson.rejected, (state, action) => {
        state.error = action.payload ? action.payload.error : action.error.message;
        state.isLoading = false;
      });
  }
});

export const { setSelectedAddress, setAddresses } = addressSlice.actions;
export default addressSlice.reducer;
