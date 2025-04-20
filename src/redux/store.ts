import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/ui/uiSlice';
import userReducer from './slice/user/userSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];