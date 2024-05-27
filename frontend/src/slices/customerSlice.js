import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    customers: [],
    selectedCustomer: null,
    status: 'idle',
    error: null,
};

export const fetchCustomers = createAsyncThunk('customers/fetchCustomers', async (_, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:8086/horizon/customers', {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch customers');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
});

export const addCustomer = createAsyncThunk('customers/addCustomer', async (newCustomer, { rejectWithValue }) => {
    try {
        const response = await fetch('http://localhost:8086/horizon/customers', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCustomer),
        });
        if (!response.ok) {
            throw new Error('Failed to add customer');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return rejectWithValue({ error: error.message });
    }
});

export const deleteCustomer = createAsyncThunk(
    'customers/deleteCustomer',
    async (customerId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/horizon/customers/${customerId}`, {
                method: 'DELETE',
                mode: 'cors',
                credentials: 'same-origin',
            });
            if (!response.ok) {
                throw new Error('Failed to delete customer');
            }
            return customerId;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        setSelectedCustomer: (state, action) => {
            state.selectedCustomer = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCustomers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.customers = action.payload;
                state.error = null;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
            })
            .addCase(addCustomer.fulfilled, (state, action) => {
                state.customers.push(action.payload);
                state.error = null;
            })
            .addCase(addCustomer.rejected, (state, action) => {
                state.error = action.payload.error;
            })
            .addCase(deleteCustomer.fulfilled, (state, action) => {
                state.customers = state.customers.filter((customer) => customer.id !== action.payload);
                state.error = null;
            })
            .addCase(deleteCustomer.rejected, (state, action) => {
                state.error = action.payload.error;
            });
    },
});

export const { setSelectedCustomer } = customerSlice.actions;

export default customerSlice.reducer;
