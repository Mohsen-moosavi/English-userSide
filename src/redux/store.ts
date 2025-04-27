import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/ui/uiSlice';
import userReducer from './slice/user/userSlice';
import courseReducer from './slice/course/courseSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
      course: courseReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];