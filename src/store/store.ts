
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { productSlice } from './products';
import { useDispatch } from 'react-redux';
import { themeSlice } from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    theme: themeSlice.reducer,
    product: productSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();