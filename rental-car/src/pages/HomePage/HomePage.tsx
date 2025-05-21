import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Welcome to RentalCar!</h1>
      <Link to="/catalog">
        <button className={s.button}>View Catalog</button>
      </Link>
    </div>
  );
};

export default HomePage;
