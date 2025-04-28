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


      // .addCase(getMoreCommentThunk.fulfilled, (state, action) => {
      //   console.log('commenttttt============================>',[...state.comments,...action.payload.data.comments])
      //   state.comments = [...state.comments,...action.payload.data.comments]
      // })

      .addCase(getMoreCommentThunk.rejected, (_, action) => {
        toast.error(action.payload as string)
      })


    //   .addCase(loginThunk.fulfilled, (state, action) => {
    //     state.userName = action.payload.user.name;
    //     state.userPhone = action.payload.user.phone;
    //     state.userAvatar = action.payload.user.avatar;
    //     state.userScore = action.payload.user.score;
    //     state.userRole = action.payload.user.role;
    //     state.userLevel = action.payload.user.level;
    //   })
    //   .addCase(loginThunk.rejected, (state, action) => {
    //     toast.error(action.payload as string || "Something went wrong")
    //   })
  },
});

export const {addNewComments } = courseSlice.actions;
export default courseSlice.reducer;