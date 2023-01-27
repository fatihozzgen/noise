import { createSlice } from "@reduxjs/toolkit";
import { getFirebaseData } from "../../firebase";

let basket = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: basket,
  },
  reducers: {
    setBasket: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setBasket } = basketSlice.actions;

export default basketSlice.reducer;
