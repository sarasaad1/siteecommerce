import { configureStore, combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "./FavoriteRedux";
import panierReducer from "./panierRedux";

export const store= configureStore({
    reducer: {
        wishlist: wishlistReducer,
        panier: panierReducer,
    }
  });
  