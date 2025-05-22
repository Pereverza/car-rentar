import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

let parsedFavorites: unknown;

try {
  const localData = localStorage.getItem("favorites");
  parsedFavorites = localData ? JSON.parse(localData) : [];
} catch {
  parsedFavorites = [];
}

const initialState: string[] = Array.isArray(parsedFavorites)
  ? parsedFavorites
  : [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = state.indexOf(id);

      if (index === -1) {
        state.push(id);
      } else {
        state.splice(index, 1);
      }
      localStorage.setItem("favorites", JSON.stringify([...state]));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
