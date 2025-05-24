import { type FC } from "react";
import type { Car } from "../../redux/cars/carsSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../redux/cars/favoritesSlice";
import HeartIcon from "../../components/HeartIcon/HeartIcon";
import s from "./CarCard.module.css";
import { store } from "../../redux/store";

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (state: ReturnType<typeof store.getState>) => state.favorites
  );
  const isFavorite = favorites.includes(car.id);

  return (
    <div className={s.carCard}>
      <button
        className={s.favoriteButton}
        onClick={() => dispatch(toggleFavorite(car.id))}
        aria-label="Add to favorites"
      >
        <HeartIcon active={isFavorite} size={16} />
      </button>

      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={s.carImage}
      />

      <div className={s.carInfo}>
        <div className={s.carTitle}>
          <div>
            <span className={s.brand}>{car.brand}</span>{" "}
            <Link to={`/catalog/${car.id}`} className={s.modelLink}>
              {car.model}
            </Link>
            , {car.year}
          </div>
          <span className={s.carPrice}>${car.rentalPrice}</span>
        </div>

        <p className={s.carLocation}>
          {car.address.split(",")[1]?.trim()} |{" "}
          {car.address.split(",")[2]?.trim()} | {car.rentalCompany}
        </p>

        <p className={s.carDetails}>
          {car.type} | {car.mileage.toLocaleString("en-US")} km
        </p>

        <Link to={`/catalog/${car.id}`} className={s.carButton}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
