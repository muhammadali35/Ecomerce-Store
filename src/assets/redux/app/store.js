import { configureStore } from '@reduxjs/toolkit';
import sliderReducer from './../features/sliderSlice.js';
import productReducer from './../features/productslice.js';
import cartReducer from './../features/cartSlice';
import authReducer from './../features/authSlice.js';

export const store = configureStore({
  reducer: {
    slider: sliderReducer,
    products:productReducer,
    cart:cartReducer,
    auth:authReducer
  },
});
