import { TypeArticleBox } from "@/components/modules/ArticleBox";
import { createSlice } from "@reduxjs/toolkit";
import { searchArticleThunk } from "./allArticlesThunk";
import toast from "react-hot-toast";


interface AllArticleState {
    articles: TypeArticleBox[],
    articlesCount: number,
    limit: number,
    offset: number,
    searchWord: string,
    loaded: boolean,
    paginatorChangerFlag: boolean,
}

const initialState: AllArticleState = {
    articles: [],
    articlesCount: 0,
    limit: 1,
    offset: 0,
    loaded: false,
    searchWord: '',
    paginatorChangerFlag: false,
};


const allArticlelice = createSlice({
    name: "allArticle",
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
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchArticleThunk.pending, (state) => {
                state.loaded = false;
            })
            .addCase(searchArticleThunk.fulfilled, (state, action) => {
                state.loaded = true;
                state.articlesCount = action.payload.data.totalCount
                state.articles = action.payload.data.articles
            })
            .addCase(searchArticleThunk.rejected, (state, action) => {
                state.loaded = true;
                toast.error(action.payload as string)
            })
    },
});

export const { setOffset, setSearchword, changePaginatorChangerFlag } = allArticlelice.actions;
export default allArticlelice.reducer;