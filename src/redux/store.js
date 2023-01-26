import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import userSlice from "./user/userSlice";
import favoriteSlice from "./favorite/favoriteSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    favorite: favoriteSlice,
  },
});
