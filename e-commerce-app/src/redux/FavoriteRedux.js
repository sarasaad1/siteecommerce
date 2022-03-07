import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    produits: [],
    quantite: 0,
  },
  reducers: {
    ajouterproduitFavori : (state, action) => {
      state.quantite += 1;
      state.produits.push(action.payload);
    },
    supprimerproduitFavori : (state, action) => {
      state.quantite -= 1;
      state.produits.push(action.payload);
    },
  },
});

export const { ajouterproduitFavori  } = wishlist.actions;
export default wishlist.reducer;