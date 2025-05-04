import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slice/ui/uiSlice';
import userReducer from './slice/user/userSlice';
import courseReducer from './slice/course/courseSlice';
import allBookReducer from './slice/allBooks/allBookSlice';
import allCourseReducer from './slice/allCourses/allCourseSlice';
import allArticleReducer from './slice/allArticles/allArticlesSlice';
import searchReducer from './slice/search/searchSlice';

export const makeStore = () =>
  configureStore({
    reducer: {
      ui: uiReducer,
      user: userReducer,
      course: courseReducer,
      allBook: allBookReducer,
      allCourse: allCourseReducer,
      allArticle: allArticleReducer,
      search: searchReducer,
    },
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];