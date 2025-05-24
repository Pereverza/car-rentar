import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./cars/carsSlice";
import filtersReducer from "../redux/filtersSlice";
import favoritesReducer from "../redux/cars/favoritesSlice";



export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
