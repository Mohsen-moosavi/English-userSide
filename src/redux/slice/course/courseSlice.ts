// src/redux/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { getMoreCommentThunk, sendCommentThunk } from "./courseThunks";
import toast from "react-hot-toast";
import { CommentsType, SessionsType } from "@/utils/types";

interface CourseState {
  sessions: SessionsType[],
  comments: CommentsType[]
}

const initialState: CourseState = {
  sessions: [],
  comments: []
};


const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addNewComments: (state,action) => {
      state.comments = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendCommentThunk.fulfilled, (_, action) => {
        toast.success(action.payload.message)
      })

      .addCase(sendCommentThunk.rejected, (_, action) => {
        toast.error(action.payload as string)
      })


      .addCase(getMoreCommentThunk.rejected, (_, action) => {
        toast.error(action.payload as string)
      })
  },
});

export const {addNewComments } = courseSlice.actions;
export default courseSlice.reducer;