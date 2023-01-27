import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import userSlice from "./user/userSlice";
import favoriteSlice from "./favorite/favoriteSlice";
import basketSlice from "./basket/basketSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productSlice,
    favorite: favoriteSlice,
    basket: basketSlice,
  },
});
