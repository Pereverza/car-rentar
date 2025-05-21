import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/carsSlice";
import { store } from "../../redux/store";
import CarCard from "../../components/CarCard/CarCard";

const CatalogPage = () => {
  const dispatch: typeof store.dispatch = useDispatch();

  const cars = useSelector(
    (state: ReturnType<typeof store.getState>) => state.cars.items
  );
  const loading = useSelector(
    (state: ReturnType<typeof store.getState>) => state.cars.isLoading
  );
  const error = useSelector(
    (state: ReturnType<typeof store.getState>) => state.cars.error
  );

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <h1>Catalog</h1>
      {loading && <p>Loading cars...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
