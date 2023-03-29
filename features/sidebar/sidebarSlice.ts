import { createSlice } from "@reduxjs/toolkit";

interface SidebarState {
  isOpen: boolean;
}

const initialState: SidebarState = {
  isOpen: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    toggleSidebarVisibility: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSidebarVisibility } = sidebarSlice.actions;

export default sidebarSlice.reducer;
