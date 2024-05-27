import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/CustomerSlice";
import customerReducer from "./slices/CustomerSlice";
import productReducer from "./slices/ProductSlice";
const Customerstore = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    products: productReducer,
  },
});

export default Customerstore;
