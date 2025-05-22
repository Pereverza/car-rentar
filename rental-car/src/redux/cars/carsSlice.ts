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

interface FetchCarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
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

export const fetchCars = createAsyncThunk<FetchCarsResponse, number>(
  "cars/fetchCars",
  async (page = 1) => {
    const response = await axios.get<FetchCarsResponse>(
      `https://car-rental-api.goit.global/cars?page=${page}&limit=12`
    );
    return response.data;
  }
);

export const loadMoreCars = createAsyncThunk<FetchCarsResponse, number>(
  "cars/loadMoreCars",
  async (page) => {
    const response = await axios.get<FetchCarsResponse>(
      `https://car-rental-api.goit.global/cars?page=${page}&limit=12`
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
      })

      .addCase(loadMoreCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loadMoreCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, ...action.payload.cars];
        state.page = action.payload.page;
        state.totalCars = action.payload.totalCars;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(loadMoreCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default carsSlice.reducer;
