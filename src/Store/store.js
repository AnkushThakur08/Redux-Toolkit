import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

const store = configureStore({
  // reducer without S
  reducer: {
    cart: cartReducer,
  },
});

export default store;
