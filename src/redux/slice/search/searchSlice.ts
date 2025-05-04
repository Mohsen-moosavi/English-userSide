import { TypeArticleBox } from "@/components/modules/ArticleBox";
import { TypeBookBox, TypeCourseBox } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { searchArticleThunk, searchBookThunk, searchCourseThunk } from "./searchThunk";
import toast from "react-hot-toast";

interface SearchState {
  courses: TypeCourseBox[],
  articles: TypeArticleBox[],
  books: TypeBookBox[],
  coursesCount: number,
  booksCount: number,
  articlesCount: number,
  courseLimit: number,
  courseOffset: number,
  bookLimit: number,
  bookOffset: number,
  articleLimit: number,
  articleOffset: number,
  searchWord: string,
  category: string,
  courseLoaded: boolean,
  bookLoaded: boolean,
  articleLoaded: boolean,
  paginatorChangerFlag: boolean,
  categoryChangerFlag: string,
}

const initialState: SearchState = {
    courses: [],
    articles: [],
    books: [],
    coursesCount: 0,
    booksCount: 0,
    articlesCount: 0,
    courseLimit: 6,
    courseOffset: 0,
    bookLimit: 6,
    bookOffset: 0,
    articleLimit: 6,
    articleOffset: 0,
  courseLoaded: false,
  bookLoaded: false,
  articleLoaded: false,
  category: '',
  searchWord: '',
  paginatorChangerFlag: false,
  categoryChangerFlag:''
};


const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setCourses: (state, action) => {
        state.courses = action.payload
      },
      setBooks: (state, action) => {
        state.books = action.payload
      },
      setArticles: (state, action) => {
        state.articles = action.payload
      },
      setSearchword: (state, action) => {
        state.searchWord = action.payload
      },
    setCourseOffset: (state, action) => {
      state.courseOffset = action.payload
    },
    setArticleOffset: (state, action) => {
        state.articleOffset = action.payload
      },
      setBookOffset: (state, action) => {
        state.bookOffset = action.payload
      },
    setCategory: (state, action) => {
      state.category = action.payload
    },
    changePaginatorChangerFlag : (state)=>{
      state.paginatorChangerFlag = !state.paginatorChangerFlag
    },
    changeCategoryChangerFlag : (state,action)=>{
        state.categoryChangerFlag = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchBookThunk.pending, (state) => {
        state.bookLoaded = false;
      })
      .addCase(searchBookThunk.fulfilled, (state, action) => {
        state.bookLoaded = true;
        state.booksCount = action.payload.count
        state.books = [...action.payload.newBooks,...action.payload.prevBooks]
      })
      .addCase(searchBookThunk.rejected, (state, action) => {
        state.bookLoaded = true;
        toast.error(action.payload as string)
      })

      .addCase(searchCourseThunk.pending, (state) => {
        state.courseLoaded = false;
      })
      .addCase(searchCourseThunk.fulfilled, (state, action) => {
        state.courseLoaded = true;
        state.coursesCount = action.payload.count
        state.courses = [...action.payload.newCourses,...action.payload.prevCourses]
      })
      .addCase(searchCourseThunk.rejected, (state, action) => {
        state.courseLoaded = true;
        toast.error(action.payload as string)
      })


      .addCase(searchArticleThunk.pending, (state) => {
        state.articleLoaded = false;
      })
      .addCase(searchArticleThunk.fulfilled, (state, action) => {
        state.articleLoaded = true;
        state.articlesCount = action.payload.count
        state.articles = [...action.payload.newArticles,...action.payload.prevArticle]
      })
      .addCase(searchArticleThunk.rejected, (state, action) => {
        state.articleLoaded = true;
        toast.error(action.payload as string)
      })
  },
});

export const { setSearchword, setCourseOffset, setArticleOffset, setBookOffset,setCategory,changePaginatorChangerFlag,changeCategoryChangerFlag, setCourses, setBooks, setArticles, } = searchSlice.actions;
export default searchSlice.reducer;