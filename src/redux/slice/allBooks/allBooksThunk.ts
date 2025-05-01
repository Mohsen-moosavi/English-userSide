// src/redux/features/user/userThunks.ts
import { getMoreCommentService, sendCommentService } from "@/services/singleCourseService";
import { getAllBookCategoryService, searchAllBookService } from "@/services/userSearchService";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const searchBookThunk = createAsyncThunk(
  "allBook/searchAllBook",
  async ({limit,offset,searchWord,category} : {limit:number,offset:number,searchWord:string,category:string}, thunkAPI) => {
    try {
      const { response, error } = await searchAllBookService(limit,offset,searchWord,category);
      if (error) throw error;
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);

export const getBookCategoryThunk = createAsyncThunk(
  "allBook/getCategory",
  async (_, thunkAPI) => {
    try {
      const { response, error } = await getAllBookCategoryService();
      if (error) throw error;
      return response;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);