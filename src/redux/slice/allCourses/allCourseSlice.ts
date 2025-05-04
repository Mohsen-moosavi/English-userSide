import { TypeCourseBox } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { getCourseCategoryThunk, searchCourseThunk } from "./allCourseThunks";
import toast from "react-hot-toast";


interface AllCourseState {
  courses: TypeCourseBox[],
  coursesCount: number,
  limit: number,
  offset: number,
  searchWord: string,
  category: string,
  loaded: boolean,
  allCategory: string[],
  paginatorChangerFlag: boolean,
}

const initialState: AllCourseState = {
  courses: [],
  coursesCount: 0,
  limit: 6,
  offset: 0,
  loaded: false,
  category: '',
  searchWord: '',
  allCategory: [],
  paginatorChangerFlag: false,
};


const allCourseSlice = createSlice({
  name: "allCourse",
  initialState,
  reducers: {
    setOffset: (state, action) => {
      state.offset = action.payload
    },
    setSearchword: (state, action) => {
      state.searchWord = action.payload
    },
    changePaginatorChangerFlag: (state) => {
      state.paginatorChangerFlag = !state.paginatorChangerFlag
    },
    setCategory: (state, action) => {
      state.category = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCourseThunk.pending, (state) => {
        state.loaded = false;
      })
      .addCase(searchCourseThunk.fulfilled, (state, action) => {
        state.loaded = true;
        state.coursesCount = action.payload.data.totalCount
        state.courses = action.payload.data.courses
      })
      .addCase(searchCourseThunk.rejected, (state, action) => {
        state.loaded = true;
        toast.error(action.payload as string)
      })


      .addCase(getCourseCategoryThunk.fulfilled, (state, action) => {
        state.allCategory = action.payload.categories
      })

      .addCase(getCourseCategoryThunk.rejected, (_, action) => {
        toast.error(action.payload as string)
      })
  },
});

export const { setOffset, setSearchword, changePaginatorChangerFlag, setCategory } = allCourseSlice.actions;
export default allCourseSlice.reducer;