
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { useDispatch } from 'react-redux';
import { themeSlice } from './theme/themeSlice';
import { navBarSlice } from './navbar/navBatSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nabBar: navBarSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();