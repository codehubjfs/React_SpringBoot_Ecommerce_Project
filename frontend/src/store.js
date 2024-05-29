// src/store.js
// import { configureStore } from '@reduxjs/toolkit';
// import profileReducer from './slices/profileSlices';
// import sellerDetailsReducer from '../src/suppiler/slice/sellerDetailsSlice';

// const store = configureStore({
//   reducer: {
//     profile: profileReducer,
//     sellerDetails:sellerDetailsReducer,
//   },
// });

// export default store;
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlices';
import sellerReducer from './slices/sellerSlices';
import customerReducer from './slices/customerSlice';
import sellerDetailsReducer from '../src/suppiler/slice/sellerDetailsSlice';
import productReducer from './slices/productSlice';
import subcategoryReducer from './slices/subCategorySlice';
import categoryReducer from './slices/categorySlice';
import offerReducer from './slices/OfferSlice';
import offerImageReducer from './slices/OfferImageSlice';
import sliderImageReducer from './slices/SliderSlice';
import notificationsReducer from './slices/NotificationSlice';
import orderReducer from './slices/OrderSlice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    sellers: sellerReducer,
    customers: customerReducer,
    sellerDetails:sellerDetailsReducer,
    products: productReducer,
    subcategories: subcategoryReducer,
    categories: categoryReducer,
    orders: orderReducer,
    offers: offerReducer,
    offerImages: offerImageReducer,
    sliderImages: sliderImageReducer,
    notifications: notificationsReducer,
  },
});

export default store;