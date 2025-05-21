import { type FC } from "react";
import type { Car } from "../../redux/cars/carsSlice";
import { Link } from "react-router-dom";
import s from "./CarCard.module.css";

interface CarCardProps {
  car: Car;
}

const CarCard: FC<CarCardProps> = ({ car }) => {
  return (
    <div className={s.carCard}>
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
