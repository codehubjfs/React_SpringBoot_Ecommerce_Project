import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    activeSellers: [],
    suspendedSellers: [],
    selectedSeller: {},
    error: "",
    status: "idle"
};

export const fetchActiveSellers = createAsyncThunk(
    'sellers/fetchActiveSellers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8086/sellers/active", {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
            if (!response.ok) {
                throw new Error("Failed to fetch active sellers");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const fetchSuspendedSellers = createAsyncThunk(
    'sellers/fetchSuspendedSellers',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8086/sellers/suspended", {
                method: "GET",
                mode: "cors",
                credentials: "same-origin"
            });
            if (!response.ok) {
                throw new Error("Failed to fetch suspended sellers");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const suspendSeller = createAsyncThunk(
    'sellers/suspendSeller',
    async (sellerId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/sellers/suspend/${sellerId}`, {
                method: "PUT",
                mode: "cors",
                credentials: "same-origin"
            });
            if (!response.ok) {
                throw new Error("Failed to suspend seller");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const deactivateSeller = createAsyncThunk(
    'sellers/deactivateSeller',
    async (sellerId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/sellers/deactivate/${sellerId}`, {
                method: "PUT",
                mode: "cors",
                credentials: "same-origin"
            });
            if (!response.ok) {
                throw new Error("Failed to deactivate seller");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const activateSeller = createAsyncThunk(
    'sellers/activateSeller',
    async (sellerId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/sellers/activate/${sellerId}`, {
                method: "PUT",
                mode: "cors",
                credentials: "same-origin"
            });
            if (!response.ok) {
                throw new Error("Failed to deactivate seller");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue({ error: error.message });
        }
    }
);

export const sellerSlice = createSlice({
    name: 'sellers',
    initialState,
    reducers: {
        setSelectedSeller: (state, action) => {
            state.selectedSeller = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchActiveSellers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchActiveSellers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.activeSellers = action.payload;
                state.error = "";
            })
            .addCase(fetchActiveSellers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
                state.activeSellers = [];
            })
            .addCase(fetchSuspendedSellers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSuspendedSellers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.suspendedSellers = action.payload;
                state.error = "";
            })
            .addCase(fetchSuspendedSellers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload.error;
                state.suspendedSellers = [];
            })
            .addCase(suspendSeller.fulfilled, (state, action) => {
                state.activeSellers = state.activeSellers.filter(seller => seller.id !== action.payload.id);
                state.suspendedSellers.push(action.payload);
                state.error = "";
            })
            .addCase(suspendSeller.rejected, (state, action) => {
                state.error = action.payload.error;
            })
            .addCase(deactivateSeller.fulfilled, (state, action) => {
                state.activeSellers = state.activeSellers.filter(seller => seller.id !== action.payload.id);
                state.error = "";
            })
            .addCase(deactivateSeller.rejected, (state, action) => {
                state.error = action.payload.error;
            })
            .addCase(activateSeller.fulfilled, (state, action) => {
                state.activeSellers = state.activeSellers.filter(seller => seller.id !== action.payload.id);
                state.error = "";
            })
            .addCase(activateSeller.rejected, (state, action) => {
                state.error = action.payload.error;
            });
            
    }
});

export const { setSelectedSeller } = sellerSlice.actions;
export default sellerSlice.reducer;
