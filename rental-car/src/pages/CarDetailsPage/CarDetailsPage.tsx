import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import BookingForm from "../../components/BookingForm/BookingForm";
import { formatCarId } from "../../utils/formatCarId";

// Іконки
import { BsCheckCircle, BsGear } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { CiCalendarDate } from "react-icons/ci";
import { TbCar } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa"; // ← заміна для fuel

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
    <div className={s.detailsWrapper}>
      <div className={s.leftColumn}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={s.image}
        />
        <BookingForm />
      </div>

      <div className={s.rightColumn}>
        <div className={s.infoBlock}>
          <div className={s.titleBlock}>
            <h1 className={s.title}>
              {car.brand} {car.model}, {car.year}
            </h1>
            <span className={s.carId}>{formatCarId(car.id)}</span>
          </div>

          <div className={s.locationWrapper}>
            <div className={s.locationBlock}>
              <HiLocationMarker className={s.icon} />
              <span>
                {car.address.split(",")[1]?.trim()},{" "}
                {car.address.split(",")[2]?.trim()}
              </span>
            </div>
            <div className={s.mileageBlock}>
              Mileage: {car.mileage.toLocaleString("en-US")} km
            </div>
          </div>

          <p className={s.price}>${car.rentalPrice}</p>

          <p className={s.description}>
            {car.description ||
              "A modern and comfortable car ideal for trips and city driving."}
          </p>

          <div className={s.infoSectionWrapper}>
            {/* Rental Conditions */}
            <div className={s.sectionBlock}>
              <h3 className={s.sectionTitle}>Rental Conditions:</h3>
              <ul className={s.sectionGridList}>
                {car.rentalConditions.map((cond, i) => (
                  <li key={i} className={s.sectionItem}>
                    <BsCheckCircle className={s.checkIcon} />
                    {cond}
                  </li>
                ))}
              </ul>
            </div>

            {/* Car Specifications */}
            <div className={s.sectionBlock}>
              <h3 className={s.sectionTitle}>Car Specifications:</h3>
              <ul className={s.sectionGridList}>
                <li className={s.sectionItem}>
                  <CiCalendarDate className={s.specIcon} />
                  Year: {car.year}
                </li>
                <li className={s.sectionItem}>
                  <TbCar className={s.specIcon} />
                  Type: {car.type}
                </li>
                <li className={s.sectionItem}>
                  <FaGasPump className={s.specIcon} />
                  Fuel Consumption: {car.fuelConsumption}
                </li>
                <li className={s.sectionItem}>
                  <BsGear className={s.specIcon} />
                  Engine Size: {car.engineSize}
                </li>
              </ul>
            </div>

            {/* Accessories and Functionalities */}
            <div className={s.sectionBlock}>
              <h3 className={s.sectionTitle}>
                Accessories and functionalities:
              </h3>
              <ul className={s.sectionGridList}>
                {[...car.accessories, ...car.functionalities].map((item, i) => (
                  <li key={i} className={s.sectionItem}>
                    <BsCheckCircle className={s.checkIcon} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Link to="/catalog" className={s.backLink}>
          ← Back to catalog
        </Link>
      </div>
    </div>
  );
};

export default CarDetailsPage;
