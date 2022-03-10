import { createSlice } from "@reduxjs/toolkit";

const utilisateurRedux = createSlice({
  name: "utilisateur",
  initialState: {
    utilisateursCourant: null,
    chercher: false,
    error: false,
  },
  reducers: {
    connexionCommence: (state) => {
      state.chercher = true;
    },
    connexionReussi: (state, action) => {
      state.chercher = false;
      state.utilisateursCourant = action.payload;
    },
    connexionEchoue: (state) => {
      state.chercher = false;
      state.error = true;
    },
    deconnexion: (state) => {
      state.utilisateursCourant=null;
      state.chercher = false;
      state.error = false; 
    }
  },
});

export const { connexionCommence } = utilisateurRedux.actions;
export const { connexionReussi } = utilisateurRedux.actions;
export const { connexionEchoue } = utilisateurRedux.actions;
export const { deconnexion } = utilisateurRedux.actions;
export default utilisateurRedux.reducer;