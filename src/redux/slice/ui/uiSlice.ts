// src/redux/features/user/userSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  isMenuMobileOpen: boolean
}

const initialState: UiState = {
  isMenuMobileOpen : false
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuMobileOpen= true
    },
    closeMenu: (state) => {
        state.isMenuMobileOpen= false
      }
  },
  // extraReducers: (builder) => {
  //   builder
  // },
});

export const { openMenu, closeMenu} = uiSlice.actions;
export default uiSlice.reducer;