import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const registerCustomer = createAsyncThunk(
  "customers/registerCustomer",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("Customer data being sent:", formData);
      const response = await fetch("http://localhost:8086/horizon/customers", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json; charset=UTF-8" },
      });
      console.log("Customer data being sent 2 time :", formData);

      // Attempt to parse successful response
      //   try {
      //     console.log("Customer data being sent 3 time :", formData);

      //     const data = await response.json();
      //     console.log("Customer data being sent 4 time :", formData);

      //     console.log(data + "hello");
      //     return data;
      //   } catch (e) {
      //     throw new Error("Unexpected response format daw baba ");
      //   }
      if (response.ok) {
        const datae = await response.json().catch(() => null);
        return datae;
      }
    } catch (error) {
      console.error("Caught  error raa :", error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const loginCustomer = createAsyncThunk(
  "customers/loginCustomer",
  async (loginData, { rejectWithValue }) => {
    try {
      console.log("Customer data being sent 1 time :", loginData);

      const response = await fetch(
        "http://localhost:8086/horizon/customers/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (response.ok) {
        console.log("Customer data being sent 2 time :", loginData);

        const data = await response.json().catch(() => null);
        console.log("Customer data being sent 3 time :", data);
        sessionStorage.setItem("customerData", JSON.stringify(data));
        const storedCustomerData = JSON.parse(
          sessionStorage.getItem("customerData")
        );
        console.log(storedCustomerData);
        console.log(sessionStorage.getItem("customerData")+"session data")
        return data;
      }

      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCustomerProfile = createAsyncThunk(
  "customers/updateCustomerProfile",
  async (updatedData, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customers/${updatedData.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to update profile");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// const customerSlice = createSlice({
//   name: "customers",
//   initialState: {
//     status: "idle",
//     error: null,
//     customerList: [],
//     customer: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(registerCustomer.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(registerCustomer.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.customerList.push(action.payload);
//         state.error = null;
//       })
//       .addCase(registerCustomer.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(loginCustomer.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(loginCustomer.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.customer = action.payload;
//         state.error = null;
//       })
//       .addCase(loginCustomer.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       })
//       .addCase(updateCustomerProfile.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(updateCustomerProfile.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.customer = action.payload;
//         state.error = null;
//       })
//       .addCase(updateCustomerProfile.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.payload;
//       });
//   },
// });
export const verifyEmail = createAsyncThunk(
  "customer/verifyEmail",
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:8086/horizon/customers/verify-email",
        {
          method: "POST",
          body: JSON.stringify(email),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Email verification failed");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "customer/resetPassword",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "http://localhost:8086/horizon/customers/update-password",
        {
          method: "PUT",
          body: JSON.stringify({ email, newPassword: password }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Password reset failed");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchCustomerData = createAsyncThunk(
  "customers/fetchCustomerData",
  async (customerId, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customers/${customerId}`
      );
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Failed to fetch customer data");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const updatePrimeStatus = createAsyncThunk(
  "customers/updatePrimeStatus",
  async ({ id, prime }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8086/horizon/customers/${id}/prime`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ prime }), // Correctly pass the prime parameter
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        throw new Error(errorData.message || "Failed to update prime status");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error updating prime status:", error);
      return rejectWithValue(error.message);
    }
  }
);


const customerSlice = createSlice({
  name: "customers",
  initialState: {
    status: "idle",
    error: null,
    customerList: [],
    customer: null, // Default to null
    emailVerificationStatus: "idle",
    passwordResetStatus: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCustomer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerCustomer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customerList.push(action.payload);
        state.error = null;
      })
      .addCase(registerCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginCustomer.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginCustomer.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = action.payload;
        state.error = null;
      })
      .addCase(loginCustomer.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updateCustomerProfile.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCustomerProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = action.payload;
        state.error = null;
      })
      .addCase(updateCustomerProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.emailVerificationStatus = "loading";
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.emailVerificationStatus = "succeeded";
        state.error = null;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.emailVerificationStatus = "failed";
        state.error = action.payload;
      })
      .addCase(resetPassword.pending, (state) => {
        state.passwordResetStatus = "loading";
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.passwordResetStatus = "succeeded";
        state.error = null;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.passwordResetStatus = "failed";
        state.error = action.payload;
      })
      .addCase(fetchCustomerData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = action.payload;
        state.error = null;
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(updatePrimeStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updatePrimeStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.customer = { ...state.customer, prime: action.payload.prime };
        state.error = null;
      })
      .addCase(updatePrimeStatus.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default customerSlice.reducer;
