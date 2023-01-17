import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: true,
    popup: false,
  },
  reducers: {
    popupbox: (state, action) => {
      state.popup = action.payload;
    },
  },
});

export const { popupbox } = userSlice.actions;
export default userSlice.reducer;
