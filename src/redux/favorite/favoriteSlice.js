import { createSlice } from "@reduxjs/toolkit";
import { getFirebaseData } from "../../firebase";

let favorite = [];

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    items: favorite,
  },
  reducers: {
    setFavorite: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
