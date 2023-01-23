import { createSlice } from "@reduxjs/toolkit";
import { getFirebaseData } from "../../firebase";

let products = [];

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: products,
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
