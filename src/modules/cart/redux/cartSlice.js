import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      state[action.payload.id] = action.payload;
    },

    clearStore() {
      return initialState;
    },

    deleteFromCart(state, action) {
      delete state[action.payload];
    },
  },
});

export const { addToCart, clearStore, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
