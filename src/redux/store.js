import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import userSlice from "./user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
  },
});
