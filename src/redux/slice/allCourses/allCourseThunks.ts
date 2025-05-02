// src/redux/features/user/userThunks.ts
import { getAllCourseCategoryService, searchAllCourseService } from "@/services/userSearchService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchCourseThunk = createAsyncThunk(
  "allCourse/searchAllCourse",
  async ({limit,offset,searchWord,category} : {limit:number,offset:number,searchWord:string,category:string}, thunkAPI) => {
    try {
      const { response, error } = await searchAllCourseService(limit,offset,searchWord,category);
      if (error) throw error;
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const getCourseCategoryThunk = createAsyncThunk(
  "allCourse/getCategory",
  async (_, thunkAPI) => {
    try {
      const { response, error } = await getAllCourseCategoryService();
      if (error) throw error;
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);