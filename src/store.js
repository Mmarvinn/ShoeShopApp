import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as api from './api';
import userReducer from './modules/user/redux/userSlice';

export const store = configureStore({
  reducer: { user: userReducer },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
        },
      },
      serializableCheck: false,
    }),
});
