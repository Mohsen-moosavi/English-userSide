// src/redux/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { addToBagThunk, deleteProfileImageThunk, editUserInfoThunk, getUserCoursesThunk, getUserInfoThunk, loginThunk, logoutThunk, registerThunk, resendCodeThunk, resendForgetpassCodeThunk, resetPasswordThunk, uploadProfileImageThunk } from "./userThunks";
import toast from "react-hot-toast";

interface UserState {
  loading:boolean
  userName: string|null,
  userUsername: string|null,
  userPhone: string|null,
  userAvatar: string|null,
  userScore: string|null,
  userRole: string|null,
  userLevel: string|null,
  userCourses : number[]|null,
  userCreated_at : Date|null,
  bagCount: number,
  payData:{price: number , offCode:string}|null
}

const initialState: UserState = {
  loading : false,
  userName: null,
  userUsername: null,
  userPhone: null,
  userAvatar: null,
  userScore: null,
  userRole: null,
  userLevel: null,
  userCourses : null,
  userCreated_at : null,
  payData:null,
  bagCount: 0,
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
    },
    setPayData: (state,action) => {
      state.payData = action.payload
    },
    setBagCount: (state,action) => {
      state.bagCount = action.payload
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
      state.userCourses = action.payload.data.user.courses;
      state.userUsername = action.payload.data.user.username;
      state.userCreated_at = action.payload.data.user.created_at;
      state.bagCount = action.payload.data.user.bagCount
      })

      .addCase(getUserInfoThunk.rejected, (state, action) => {
        state.userName = null;
        state.userPhone = null;
        state.userAvatar = null;
        state.userScore = null;
        state.userRole = null;
        state.userLevel = null;
        state.userCourses = null;
        state.userUsername = null;
        state.userCreated_at = null;
        state.bagCount = 0
      })


      .addCase(loginThunk.fulfilled, (state, action) => {
        state.userName = action.payload.user.name;
        state.userPhone = action.payload.user.phone;
        state.userAvatar = action.payload.user.avatar;
        state.userScore = action.payload.user.score;
        state.userRole = action.payload.user.role;
        state.userLevel = action.payload.user.level;
        state.userCourses = action.payload.user.courses;
        state.userUsername = action.payload.user.username;
        state.userCreated_at = action.payload.user.created_at;
      state.bagCount = action.payload.user.bagCount
      })
      .addCase(loginThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(resendForgetpassCodeThunk.fulfilled, () => {
        toast.success('کد با موفقیت ارسال شد.')
      })
      .addCase(resendForgetpassCodeThunk.rejected, (_,action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(resendCodeThunk.fulfilled, () => {
        toast.success('کد با موفقیت ارسال شد.')
      })
      .addCase(resendCodeThunk.rejected, (_, action) => {
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
        state.userCourses = action.payload.data.user.courses;
        state.userUsername = action.payload.data.user.username;
        state.userCreated_at = action.payload.data.user.created_at;
        state.bagCount = action.payload.data.user.bagCount
      })
      .addCase(registerThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })

      .addCase(resetPasswordThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.userName = action.payload.data.user.name;
        state.userPhone = action.payload.data.user.phone;
        state.userAvatar = action.payload.data.user.avatar;
        state.userScore = action.payload.data.user.score;
        state.userRole = action.payload.data.user.role;
        state.userLevel = action.payload.data.user.level;
        state.userCourses = action.payload.data.user.courses;
        state.userUsername = action.payload.data.user.username;
        state.userCreated_at = action.payload.data.user.created_at;
        state.bagCount = action.payload.data.user.bagCount
        })
      .addCase(resetPasswordThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })

      .addCase(uploadProfileImageThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(uploadProfileImageThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.userAvatar = action.payload.data.userAvatar
        state.loading = false
        })
      .addCase(uploadProfileImageThunk.rejected, (state, action) => {
        toast.error(action.payload as string || "Something went wrong")
        state.loading = false
      })


      .addCase(deleteProfileImageThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.userAvatar = action.payload.data.userAvatar
        })
      .addCase(deleteProfileImageThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })



      .addCase(getUserCoursesThunk.fulfilled, (state, action) => {
        state.userCourses = action.payload.data.coursesId
        })
      .addCase(getUserCoursesThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })

      
      .addCase(editUserInfoThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.userName = action.payload.data.user.name;
        state.userUsername = action.payload.data.user.username;
        })
      .addCase(editUserInfoThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(addToBagThunk.fulfilled, (state, action) => {
        toast.success(action.payload.message)
        state.bagCount = action.payload.data.bagCount;
        })
      .addCase(addToBagThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })


      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.userName = null;
        state.userPhone = null;
        state.userAvatar = null;
        state.userScore = null;
        state.userRole = null;
        state.userLevel = null;
        state.userCourses = null;
        state.userUsername = null;
        state.userCreated_at = null;
        state.bagCount = 0
        })
      .addCase(logoutThunk.rejected, (_, action) => {
        toast.error(action.payload as string || "Something went wrong")
      })
  },
});

export const { logout , setPayData, setBagCount } = userSlice.actions;
export default userSlice.reducer;