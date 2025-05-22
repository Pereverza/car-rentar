import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, loadMoreCars } from "../../redux/cars/carsSlice";
import { setFilters } from "../../redux/filtersSlice";
import type { AppDispatch, RootState } from "../../redux/store";
import CarCard from "../../components/CarCard/CarCard";
import Filters from "../../components/CarCard/Filters/Filters";
import s from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const cars = useSelector((state: RootState) => state.cars.items);
  const loading = useSelector((state: RootState) => state.cars.isLoading);
  const error = useSelector((state: RootState) => state.cars.error);
  const page = useSelector((state: RootState) => state.cars.page);
  const totalPages = useSelector((state: RootState) => state.cars.totalPages);


  const brands = Array.from(new Set(cars.map((car) => car.brand))).sort();

  useEffect(() => {
    dispatch(fetchCars(1));
  }, [dispatch]);

  return (
    <div className={s.catalogPage}>
      <h1 className={s.title}></h1>

      <Filters
        brands={brands}
        onFilter={(filters) => {
          dispatch(setFilters(filters));
          dispatch(fetchCars(1));
        }}
      />

      {loading && page === 1 && <p>Loading cars...</p>}
      {error && <p className={s.error}>{error}</p>}

      <div className={s.cardList}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      {page < totalPages && (
        <button
          className={s.loadMoreButton}
          onClick={() => dispatch(loadMoreCars(page + 1))}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default CatalogPage;
