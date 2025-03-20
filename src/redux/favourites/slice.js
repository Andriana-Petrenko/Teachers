import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";


const slice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    toggleFavourite (state, action) {
      const index = state.favourites.indexOf(action.payload);
      if (index !== -1) {
        state.favourites.splice(index, 1);
      } else {
        state.favourites.push(action.payload);
      }
    },
  },
});

export const { toggleFavourite } = slice.actions;
export const favouritesReducer = slice.reducer;
