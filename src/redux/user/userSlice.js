import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
