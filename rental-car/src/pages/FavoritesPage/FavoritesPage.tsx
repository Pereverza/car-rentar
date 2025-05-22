import { useSelector } from "react-redux";
import { store } from "../../redux/store";
import CarCard from "../../components/CarCard/CarCard";
import s from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(
    (state: ReturnType<typeof store.getState>) => state.favorites as string []
  );
  const cars = useSelector(
    (state: ReturnType<typeof store.getState>) => state.cars.items
  );
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div className={s.favoritesPage}>
      <h1 className={s.title}>Your Favorite Cars</h1>

      {favoriteCars.length === 0 ? (
        <p className={s.empty}>No favorites yet 💔</p>
      ) : (
        <div className={s.cardList}>
          {favoriteCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
