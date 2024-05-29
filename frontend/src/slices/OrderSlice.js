import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  selectedOrder: null,
  status: 'idle',
  error: null,
  totalOrders: 0,
  revenue: 0,
  pendingOrders: 0,
};

export const getOrdersFromDb = createAsyncThunk(
  'orders/getOrdersFromDb',
  async () => {
    const response = await fetch('http://localhost:8086/orders');
    if (!response.ok) {
      throw new Error('Failed to fetch orders');
    }
    return response.json();
  }
);

export const getOrderById = createAsyncThunk(
  'orders/getOrderById',
  async (id) => {
    const response = await fetch(`http://localhost:8086/orders/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch order');
    }
    return response.json();
  }
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateOrderStatus',
  async ({ id, status }) => {
    const response = await fetch(`http://localhost:8086/orders/${id}/status`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
    if (!response.ok) {
      throw new Error('Failed to update order status');
    }
    return { id, status };
  }
);

export const getTotalOrders = createAsyncThunk(
  'orders/getTotalOrders',
  async () => {
    const response = await fetch('http://localhost:8086/orders/total');
    if (!response.ok) {
      throw new Error('Failed to fetch total orders');
    }
    return response.json();
  }
);

export const getRevenue = createAsyncThunk(
  'orders/getRevenue',
  async () => {
    const response = await fetch('http://localhost:8086/orders/revenue');
    if (!response.ok) {
      throw new Error('Failed to fetch revenue');
    }
    return response.json();
  }
);

export const getPendingOrders = createAsyncThunk(
  'orders/getPendingOrders',
  async () => {
    const response = await fetch('http://localhost:8086/orders/pending');
    if (!response.ok) {
      throw new Error('Failed to fetch pending orders');
    }
    return response.json();
  }
);

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setSelectedOrder: (state, action) => {
      state.selectedOrder = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrdersFromDb.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOrdersFromDb.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getOrdersFromDb.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getOrderById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getOrderById.fulfilled, (state, action) => {
        state.selectedOrder = action.payload;
        state.status = 'succeeded';
      })
      .addCase(getOrderById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const { id, status } = action.payload;
        const existingOrder = state.orders.find((order) => order.id === id);
        if (existingOrder) {
          existingOrder.status = status;
        }
      })
      .addCase(getTotalOrders.fulfilled, (state, action) => {
        state.totalOrders = action.payload;
      })
      .addCase(getRevenue.fulfilled, (state, action) => {
        state.revenue = action.payload;
      })
      .addCase(getPendingOrders.fulfilled, (state, action) => {
        state.pendingOrders = action.payload;
      });
  },
});
  
export const { setSelectedOrder } = orderSlice.actions;

export default orderSlice.reducer;
