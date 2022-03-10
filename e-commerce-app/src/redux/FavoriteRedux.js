import { createSlice } from "@reduxjs/toolkit";

const wishlist = createSlice({
  name: "wishlist",
  initialState: {
    produits: [],
    quantite: 0,
    istrue:false
  },
  reducers: {
    ajouterproduitFavori : (state, action) => {
      state.quantite += 1;
      state.istrue = true;
      state.produits.push(action.payload);      
    },
    supprimerproduitFavori : (state, action) => {
     if (state.quantite>0) {state.quantite -= 1;
      state.produits=[];
      state.istrue = false;
      state.produits.push(action.payload);}
    },
    suppFavori : (state) => {
      state.produits=[];
      state.istrue = false;
      state.quantite = 0;
    }
  },
});

export const { ajouterproduitFavori  } = wishlist.actions;
export const { supprimerproduitFavori,suppFavori  } = wishlist.actions;
export default wishlist.reducer;