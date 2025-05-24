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
      const newState = state.includes(id)
        ? state.filter((item) => item !== id)
        : [...state, id];
      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
