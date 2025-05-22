import { type FC } from "react";
import type { Car } from "../../redux/cars/carsSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/cars/favoritesSlice";
import { Heart } from "lucide-react";
import s from "./CarCard.module.css";
import { createSelector } from "@reduxjs/toolkit";
import { store } from "../../redux/store";

const selectFavorites = createSelector(
  [(state: ReturnType<typeof store.getState>) => state.favorites],
  (favorites): string[] => Array.isArray(favorites) ? [...favorites] : []// уникаємо warning — повертаємо новий масив
);

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(car.id);

  return (
    <div className={s.carCard}>
      <button
        className={s.favoriteButton}
        onClick={() => dispatch(toggleFavorite(car.id))}
        aria-label="Add to favorites"
      >
        {isFavorite ? <Heart fill="#f00" color="#f00" /> : <Heart />}
      </button>

      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={s.carImage}
      />

      <div className={s.carInfo}>
        <h2 className={s.carTitle}>
          {car.brand} {car.model}, {car.year}
        </h2>

        <p className={s.carPrice}>Rental price: ${car.rentalPrice}</p>
        <p className={s.carDescription}>{car.description}</p>

        <Link to={`/catalog/${car.id}`} className={s.carButton}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
