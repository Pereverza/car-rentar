import { Link } from "react-router-dom";
import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={s.homeWrapper}>
      <header className={s.header}>
        <div className={s.logo}>
          Rental<span>Car</span>
        </div>
        <nav className={s.nav}>
          <Link to="/" className={s.navLink}>
            Home
          </Link>
          <Link to="/catalog" className={s.navLink}>
            Catalog
          </Link>
        </nav>
      </header>

      <section className={s.hero}>
        <div className={s.overlay}>
          <h1 className={s.title}>Find your perfect rental car</h1>
          <p className={s.subtitle}>
            Reliable and budget-friendly rentals for any journey
          </p>
          <Link to="/catalog" className={s.ctaButton}>
            View Catalog
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
