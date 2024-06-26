
import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { useDispatch } from 'react-redux';
import { navBarSlice } from './navbar/navBatSlice';
import { mailSlice } from './mail';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    nabBar: navBarSlice.reducer,
    mail: mailSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();