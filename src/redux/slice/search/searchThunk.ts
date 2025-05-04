import { TypeArticleBox } from "@/components/modules/ArticleBox";
import { searchAllArticleService, searchAllBookService, searchAllCourseService } from "@/services/userSearchService";
import { TypeBookBox, TypeCourseBox } from "@/utils/types";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchBookThunk = createAsyncThunk(
    "search/searchBooks",
    async ({limit,offset,searchWord,prevBooks} : {limit:number,offset:number,searchWord:string,prevBooks:TypeBookBox[]}, thunkAPI) => {
      try {
        const { response, error } = await searchAllBookService(limit,offset,searchWord,'');
        if (error) throw error;
        return {newBooks :response.data.books, count:response.data.totalCount, prevBooks};
      } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
      }
    }
  );

  export const searchCourseThunk = createAsyncThunk(
    "search/searchCourse",
    async ({limit,offset,searchWord,prevCourses} : {limit:number,offset:number,searchWord:string,prevCourses:TypeCourseBox[]}, thunkAPI) => {
      try {
        const { response, error } = await searchAllCourseService(limit,offset,searchWord,'');
        if (error) throw error;
        return {newCourses :response.data.courses, count:response.data.totalCount, prevCourses};
      } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
      }
    }
  );

  export const searchArticleThunk = createAsyncThunk(
    "search/searchArticle",
    async ({limit,offset,searchWord,prevArticle} : {limit:number,offset:number,searchWord:string,prevArticle:TypeArticleBox[]}, thunkAPI) => {
      try {
        const { response, error } = await searchAllArticleService(limit,offset,searchWord);
        if (error) throw error;
        return {newArticles :response.data.articles, count:response.data.totalCount, prevArticle};
      } catch (err: any) {
        return thunkAPI.rejectWithValue(err?.response?.data?.message || err.message);
      }
    }
  );