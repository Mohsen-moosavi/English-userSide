import { searchAllArticleService } from "@/services/userSearchService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchArticleThunk = createAsyncThunk(
    "allArticle/searchAllArticle",
    async ({limit,offset,searchWord} : {limit:number,offset:number,searchWord:string}, thunkAPI) => {
      try {
        const { response, error } = await searchAllArticleService(limit,offset,searchWord);
        if (error) throw error;
        return response;
      } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
      }
    }
  );