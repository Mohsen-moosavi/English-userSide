// src/redux/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { getUserInfoThunk, loginThunk, registerThunk, resendCodeThunk, resendForgetpassCodeThunk, resetPasswordThunk, verifyForgetCodeThunk, verifyPhoneThunk } from "./userThunks";
import toast from "react-hot-toast";

interface UserState {
  userName: string|null,
  userPhone: string|null,
  userAvatar: string|null,
  userScore: string|null,
  userRole: string|null,
  userLevel: string|null,
}

const initialState: UserState = {
  userName: null,
  userPhone: null,
  userAvatar: null,
  userScore: null,
  userRole: null,
  userLevel: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.userName= null
      state.userPhone= null
      state.userAvatar= null
      state.userScore= null
      state.userRole= null
      state.userLevel= null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserInfoThunk.fulfilled, (state, action) => {
      state.userName = action.payload.data.user.name;
      state.userPhone = action.payload.data.user.phone;
      state.userAvatar = action.payload.data.user.avatar;
      state.userScore = action.payload.data.user.score;
      state.userRole = action.payload.data.user.role;
      state.userLevel = action.payload.data.user.level;
      })


      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userPhone = action.payload.user.phone;
        state.userAvatar = action.payload.user.avatar;
        state.userScore = action.payload.user.score;
        state.userRole = action.payload.user.role;
        state.userLevel = action.payload.user.level;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(resendForgetpassCodeThunk.fulfilled, (state, action) => {
        toast.success('کد با موفقیت ارسال شد.')
      })
      .addCase(resendForgetpassCodeThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(resendCodeThunk.fulfilled, (state, action) => {
        toast.success('کد با موفقیت ارسال شد.')
      })
      .addCase(resendCodeThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(registerThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.userName = action.payload.data.user.name;
        state.userPhone = action.payload.data.user.phone;
        state.userAvatar = action.payload.data.user.avatar;
        state.userScore = action.payload.data.user.score;
        state.userRole = action.payload.data.user.role;
        state.userLevel = action.payload.data.user.level;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })

      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        })
      .addCase(resetPasswordThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })

      
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;