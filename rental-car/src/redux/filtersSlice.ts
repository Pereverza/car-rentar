import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface Filters {
  make?: string;
  rentalPrice?: string;
  mileageFrom?: string;
  mileageTo?: string;
}

const initialState: Filters = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action: PayloadAction<Filters>) {
      return { ...state, ...action.payload };
    },
    resetFilters() {
      return {};
    },
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;

