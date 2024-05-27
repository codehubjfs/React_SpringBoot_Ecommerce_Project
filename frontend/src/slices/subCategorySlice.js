import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    subcategories: [],
    status: 'idle',
    error: null,
};

// Thunks for async operations
export const fetchSubcategories = createAsyncThunk(
    'subcategories/fetchSubcategory',
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8086/subcategory", {
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
export const addSubcategory = createAsyncThunk(
    'subcategories/addSubcategory',
    async (newSubcategory, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:8086/subcategory", {
                method: "POST",
                mode: "cors",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newSubcategory),
            });
            if (!response.ok) {
                throw new Error("Something went wrong in task addition");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);
export const updateSubcategory = createAsyncThunk(
    'subcategories/updateSubcategory',
    async (subcategory, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/subcategory/${subcategory.subCategoryId}`, {
                method: "PUT",
                mode: "cors",
                credentials: "same-origin",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(subcategory),
            });
            if (!response.ok) {
                throw new Error("Failed to update the product");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteSubcategory = createAsyncThunk(
    'subcategories/deleteSubcategory',
    async (subCategory, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:8086/subcategory/${subCategory.subCategoryId}`, {
                method: "DELETE",
                mode: "cors",
                credentials: "same-origin",
            });
            if (!response.ok) {
                throw new Error("Something went wrong while deleting the product");
            }
            return subCategory.subCategoryId; // Returning the subCategoryId for filtering
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const subCategorySlice = createSlice({
    name: 'subcategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchSubcategories.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchSubcategories.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.subcategories = action.payload;
            })
            .addCase(fetchSubcategories.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(addSubcategory.fulfilled, (state, action) => {
                state.subcategories.push(action.payload);
            })
            .addCase(deleteSubcategory.fulfilled, (state, action) => {
                state.subcategories = state.subcategories.filter(subcategory => subcategory.id !== action.payload);
            })
            .addCase(updateSubcategory.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(updateSubcategory.fulfilled, (state, action) => {
                state.status = 'succeeded';
                // Find the index of the updated subcategory
                const index = state.subcategories.findIndex(subcategory => subcategory.id === action.payload.subCategoryId);
                if (index !== -1) {
                    // Replace the subcategory with the updated one
                    state.subcategories[index] = action.payload;
                }
            })
            .addCase(updateSubcategory.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default subCategorySlice.reducer;