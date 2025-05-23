
import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
  const location = useLocation();

  return (
    <header className={s.header}>
      <div className={s.logo}>
        Rental<span>Car</span>
      </div>
      <nav className={s.nav}>
        <Link
          to="/"
          className={`${s.navLink} ${
            location.pathname === "/" ? s.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/catalog"
          className={`${s.navLink} ${
            location.pathname.startsWith("/catalog") ? s.active : ""
          }`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
