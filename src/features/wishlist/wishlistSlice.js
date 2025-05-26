// src/features/wishlist/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Will store product objects { id, name, price, image, etc. }
  // We don't usually track totalQuantity or totalPrice in a wishlist
  // as it's more of a "saved items" list.
};

export const wishlistSlice = createSlice({
  name: 'wishlist', // Name of the slice
  initialState,
  reducers: {
    // Action to add an item to the wishlist
    // Expects action.payload to be the full product object (or essential details)
    addItemToWishlist: (state, action) => {
      const newItem = action.payload;
      // Check if the item already exists in the wishlist to avoid duplicates
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.items.push(newItem); // Add the item if it's not already there
        // You could sort items here if desired, e.g., by date added or name
      }
      // Optionally, you could provide feedback if the item is already in the wishlist,
      // but often, clicking "add" again on an existing item does nothing or confirms it's there.
    },

    // Action to remove an item from the wishlist
    // Expects action.payload to be the item's id
    removeItemFromWishlist: (state, action) => {
      const itemIdToRemove = action.payload; // This should be the product ID
      state.items = state.items.filter(item => item.id !== itemIdToRemove);
    },

    // Action to clear the entire wishlist
    clearWishlist: (state) => {
      state.items = [];
    },

    // Optional: Toggle item in wishlist (adds if not present, removes if present)
    toggleWishlistItem: (state, action) => {
      const itemToToggle = action.payload; // The product object
      const existingItemIndex = state.items.findIndex(item => item.id === itemToToggle.id);

      if (existingItemIndex !== -1) {
        // Item exists, remove it
        state.items.splice(existingItemIndex, 1);
      } else {
        // Item does not exist, add it
        state.items.push(itemToToggle);
      }
    }
  },
});

// Export the action creators
export const {
  addItemToWishlist,
  removeItemFromWishlist,
  clearWishlist,
  toggleWishlistItem, // Export if you use it
} = wishlistSlice.actions;

// Selectors (optional, but good practice)
export const selectWishlistItems = (state) => state.wishlist.items;
export const selectIsItemInWishlist = (itemId) => (state) =>
  state.wishlist.items.some(item => item.id === itemId);

// Export the reducer
export default wishlistSlice.reducer;