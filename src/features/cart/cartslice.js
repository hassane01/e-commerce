// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Helper to generate a unique ID for cart items based on product and variants
const generateCartItemId = (product) => {
  if (!product || typeof product.id === 'undefined') {
    console.error("generateCartItemId received invalid product object:", product);
    return `invalid-product-${Date.now()}`;
  }
  let idString = `${product.id}`;
  if (product.color) {
    idString += `-${String(product.color).replace(/\s+/g, '-')}`;
  }
  if (product.size) {
    idString += `-${String(product.size).replace(/\s+/g, '-')}`;
  }
  return idString;
};

// Helper function to recalculate totals
const recalculateTotals = (state) => {
  let quantity = 0;
  let price = 0;
  state.items.forEach(item => {
    quantity += item.quantity;
    price += item.quantity * item.price;
  });
  state.totalQuantity = quantity;
  state.totalPrice = price;
};

const initialState = {
  items: [], // Stores { cartItemId, productId, name, price, quantity, image, color, size }
  totalQuantity: 0,
  totalPrice: 0,
  // You could add discountAmount, grandTotal here if coupons are managed in Redux
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action to add an item (or a specific quantity of an item/variant) to the cart
    // Expects action.payload: { productDetails: { id, name, price, image, color?, size? }, quantity: number }
    addItem: (state, action) => {
      const { productDetails, quantity } = action.payload;

      if (!productDetails || typeof quantity !== 'number' || quantity <= 0) {
        console.error("addItem received invalid payload:", action.payload);
        return; // Exit if payload is malformed
      }

      const cartItemId = generateCartItemId(productDetails);
      const existingItemIndex = state.items.findIndex(item => item.cartItemId === cartItemId);

      if (existingItemIndex !== -1) {
        // Item variant already exists, add to its quantity
        state.items[existingItemIndex].quantity += quantity;
      } else {
        // New item variant, add it to the items array
        state.items.push({
          ...productDetails,        // Contains id (as productId), name, price, image, color, size
          productId: productDetails.id, // Keep original product ID
          cartItemId,              // The unique ID for this variant in the cart
          quantity,                // The quantity specified by the user
        });
      }
      recalculateTotals(state);
    },

    // Action to remove an item from the cart completely
    // Expects action.payload to be the item's `cartItemId`
    removeItem: (state, action) => {
      const cartItemIdToRemove = action.payload;
      if (typeof cartItemIdToRemove !== 'string') {
        console.error("removeItem received invalid payload:", cartItemIdToRemove);
        return;
      }
      state.items = state.items.filter(item => item.cartItemId !== cartItemIdToRemove);
      recalculateTotals(state);
    },

    // Action to increment the quantity of a specific item by 1
    // Expects action.payload to be the item's `cartItemId`
    incrementItemQuantity: (state, action) => {
      const cartItemIdToIncrement = action.payload;
      if (typeof cartItemIdToIncrement !== 'string') {
        console.error("incrementItemQuantity received invalid payload:", cartItemIdToIncrement);
        return;
      }
      const item = state.items.find(item => item.cartItemId === cartItemIdToIncrement);
      if (item) {
        item.quantity++;
      }
      recalculateTotals(state);
    },

    // Action to decrement the quantity of a specific item by 1
    // If quantity becomes 0 or less, the item is removed.
    // Expects action.payload to be the item's `cartItemId`
    decrementItemQuantity: (state, action) => {
      const cartItemIdToDecrement = action.payload;
       if (typeof cartItemIdToDecrement !== 'string') {
        console.error("decrementItemQuantity received invalid payload:", cartItemIdToDecrement);
        return;
      }
      const itemIndex = state.items.findIndex(item => item.cartItemId === cartItemIdToDecrement);
      if (itemIndex !== -1) {
        state.items[itemIndex].quantity--;
        if (state.items[itemIndex].quantity <= 0) {
          // Remove item if quantity drops to 0 or below
          state.items.splice(itemIndex, 1);
        }
      }
      recalculateTotals(state);
    },

    // Action to update the quantity of a specific item to a new value
    // Expects action.payload to be an object: { cartItemId, newQuantity }
    updateItemQuantity: (state, action) => {
      const { cartItemId, newQuantity } = action.payload;

      if (typeof cartItemId !== 'string' || typeof newQuantity !== 'number' ) {
        console.error("updateItemQuantity received invalid payload:", action.payload);
        return;
      }

      const itemIndex = state.items.findIndex(item => item.cartItemId === cartItemId);
      if (itemIndex !== -1) {
        if (newQuantity > 0) {
          state.items[itemIndex].quantity = newQuantity;
        } else {
          // If newQuantity is 0 or less, remove the item
          state.items.splice(itemIndex, 1);
        }
      }
      recalculateTotals(state);
    },

    // Action to clear the entire cart
    clearCart: (state) => {
      state.items = [];
      // No need to call recalculateTotals for clearing, just reset them directly
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

// Export the action creators
export const {
  addItem,
  removeItem,
  incrementItemQuantity,
  decrementItemQuantity,
  updateItemQuantity, // Also export this if you might use it elsewhere
  clearCart,
} = cartSlice.actions;

// Selectors (can be defined here or in a separate selectors.js file)
export const selectCartItems = (state) => state.cart.items;
export const selectTotalCartQuantity = (state) => state.cart.totalQuantity;
export const selectTotalCartPrice = (state) => state.cart.totalPrice;
// Example: Selector to find a specific item by its cartItemId
export const selectCartItemById = (cartItemId) => (state) =>
  state.cart.items.find(item => item.cartItemId === cartItemId);

// Export the reducer
export default cartSlice.reducer;