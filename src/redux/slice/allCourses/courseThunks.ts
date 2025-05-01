// src/redux/features/user/userThunks.ts
import { getMoreCommentService, sendCommentService } from "@/services/singleCourseService";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const sendCommentThunk = createAsyncThunk(
  "course/sendComment",
  async ({content,score,courseId} : {content:string,score:number,courseId:number}, thunkAPI) => {
    try {
      const { response, error } = await sendCommentService(content,score,courseId);
      if (error) throw error;
      return response.data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
    }
  }
);