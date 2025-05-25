// src/app/store.js (Assuming this is the correct file location)
import { configureStore } from '@reduxjs/toolkit';
// Correct path to your cartSlice.js (adjust if your store.js is in a different location)
import cartReducer from '../features/cart/cartslice.js';
import wishlistReducer from '../features/wishlist/wishlistSlice.js'

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Key 'cart' will make state accessible via state.cart
    wishlist: wishlistReducer,
  },
});