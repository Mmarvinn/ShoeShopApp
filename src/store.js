import axios from 'axios';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import * as api from './api';

export const store = configureStore({
  reducer: {},
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          axios,
          api,
        },
      },
      serializableCheck: false,
    }),
});
