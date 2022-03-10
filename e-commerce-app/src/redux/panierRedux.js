import { createSlice } from "@reduxjs/toolkit";
const panier = createSlice({
  name: "panier",
  initialState: {
    produits: [],
    quantite: 0,
    total: 0,
  },
  reducers: {
    ajouterproduitPanier: (state, action) => {
      state.quantite += 1;
      state.produits.push(action.payload);
      state.total += action.payload.price* action.payload.quantite ;
    },
    supprimerPanier : (state) => {
      state.produits = [];
      state.quantite = 0;
      state.total= 0;
    }
  },
});

export const { ajouterproduitPanier,supprimerPanier } = panier.actions;
export default panier.reducer;