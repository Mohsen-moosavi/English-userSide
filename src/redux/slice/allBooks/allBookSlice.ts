import { TypeBookBox } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { getBookCategoryThunk, searchBookThunk } from "./allBooksThunk";
import toast from "react-hot-toast";


interface AllBookState {
  books: TypeBookBox[],
  booksCount:number,
  limit: number,
  offset: number,
  searchWord: string,
  category: string,
  loaded: boolean,
  allCategory:string[],
  paginatorChangerFlag:boolean,
}

const initialState: AllBookState = {
  books: [],
  booksCount:0,
  limit: 6,
  offset: 0,
  loaded: false,
  category:'',
  searchWord:'',
  allCategory:[],
  paginatorChangerFlag:false,
};


const allBookSlice = createSlice({
  name: "allBook",
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
    setCategory: (state,action) => {
      state.category = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBookThunk.pending, (state) => {
        state.loaded = false;
      })
      .addCase(searchBookThunk.fulfilled, (state, action) => {
        state.loaded = true;
        state.booksCount = action.payload.data.totalCount
        state.books = action.payload.data.books
      })
      .addCase(searchBookThunk.rejected, (state, action) => {
        state.loaded = true;
        toast.error(action.payload as string)
      })


      .addCase(getBookCategoryThunk.fulfilled, (state, action) => {
        state.allCategory = action.payload.data.categories
      })
      .addCase(getBookCategoryThunk.rejected, (_, action) => {
        toast.error(action.payload as string)
      })
  },
});

export const { setOffset,setSearchword,changePaginatorChangerFlag,setCategory } = allBookSlice.actions;
export default allBookSlice.reducer;