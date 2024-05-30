import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/CustomerSlice";
import customerReducer from "./slices/CustomerSlice";
import productReducer from "./slices/ProductSlice";
import wishlistReducer from "./slices/WishlistSlice";
import cartReducer from "./slices/CartSlice";
import orderReducer from "./slices/ProductSlice";
const Customerstore = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    products: productReducer,
    carts: cartReducer,
    wishlist: wishlistReducer,
    orders: orderReducer,
  },
});

export default Customerstore;
