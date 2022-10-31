import { configureStore } from '@reduxjs/toolkit';
import userReducer from './modules/user/redux/userSlice';
import cartReducer from './modules/cart/redux/cartSlice';

export const store = configureStore({
  reducer: { user: userReducer, cart: cartReducer },
  devTools: true,
});
