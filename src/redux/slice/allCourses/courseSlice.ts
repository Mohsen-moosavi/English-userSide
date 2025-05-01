import { TypeCourseBox } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";


interface AllCourseState {
  courses: TypeCourseBox[]
}

const initialState: AllCourseState = {
  courses: []
};


const allCourseSlice = createSlice({
  name: "allCourse",
  initialState,
  reducers: {
    // addNewComments: (state, action) => {
    //   state.comments = action.payload
    // }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(sendCommentThunk.fulfilled, (_, action) => {
    //     toast.success(action.payload.message)
    //   })

    //   .addCase(sendCommentThunk.rejected, (_, action) => {
    //     toast.error(action.payload as string)
    //   })
  },
});

// export const { addNewComments } = courseSlice.actions;
export default allCourseSlice.reducer;