import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import s from "./CarDetailsPage.module.css";

const CarDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  const car = useSelector((state: RootState) =>
    state.cars.items.find((item) => item.id === id)
  );

  if (!car) {
    return (
      <div className={s.notFound}>
        <h2>Car not found</h2>
        <Link to="/catalog">← Back to catalog</Link>
      </div>
    );
  }

  return (
    <div className={s.details}>
      <h1>
        {car.brand} {car.model} ({car.year})
      </h1>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={s.image}
      />

      <div className={s.info}>
        <p>
          <strong>Type:</strong> {car.type}
        </p>
        <p>
          <strong>Engine:</strong> {car.engineSize}
        </p>
        <p>
          <strong>Fuel consumption:</strong> {car.fuelConsumption}
        </p>
        <p>
          <strong>Mileage:</strong> {car.mileage.toLocaleString()} km
        </p>
        <p>
          <strong>Rental price:</strong> ${car.rentalPrice}
        </p>
        <p>
          <strong>Rental company:</strong> {car.rentalCompany}
        </p>
        <p>
          <strong>Address:</strong> {car.address}
        </p>
        <p className={s.description}>{car.description}</p>

        <h3>Accessories</h3>
        <ul>
          {car.accessories.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Functionalities</h3>
        <ul>
          {car.functionalities.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3>Rental Conditions</h3>
        <ul>
          {car.rentalConditions.map((cond, i) => (
            <li key={i}>{cond}</li>
          ))}
        </ul>

        <button className={s.button}>Rent now</button>
        <Link to="/catalog" className={s.backLink}>
          ← Back to catalog
        </Link>
      </div>
    </div>
  );
};

export default CarDetailsPage;
