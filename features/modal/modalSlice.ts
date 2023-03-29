import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModalVisibility: state => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModalVisibility } = ModalSlice.actions;

export default ModalSlice.reducer;
