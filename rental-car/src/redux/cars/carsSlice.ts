import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string[];
  mileage: number;
}

interface CarsState {
  items: Car[];
  isLoading: boolean;
  error: string | null;
  page: number;
  totalCars: number;
  totalPages: number;
}

const initialState: CarsState = {
  items: [],
  isLoading: false,
  error: null,
  page: 1,
  totalCars: 0,
  totalPages: 0,
};

interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export const fetchCars = createAsyncThunk<FetchCarsResponse>(
  "cars/fetchCars",
  async () => {
    const response = await axios.get<FetchCarsResponse>(
      "https://car-rental-api.goit.global/cars"
    );
    return response.data;
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.cars;
        state.page = action.payload.page;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default carsSlice.reducer;
