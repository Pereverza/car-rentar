import { useState } from "react";
import s from "./Filters.module.css";

interface Props {
  onFilter: (filters: {
    make?: string;
    rentalPrice?: string;
    mileageFrom?: string;
    mileageTo?: string;
  }) => void;
  brands: string[];
}

const prices = ["30", "40", "50", "60", "70", "80"];

const Filters = ({ onFilter, brands }: Props) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilter({ make, rentalPrice: price, mileageFrom, mileageTo });
  };

  return (
    <form className={s.filters} onSubmit={handleSubmit}>
      <div>
        <label className={s.brend}>Car brand</label>
        <select value={make} onChange={(e) => setMake(e.target.value)}>
          <option value="">Choose a brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={s.price}>Price / 1 hour</label>
        <select value={price} onChange={(e) => setPrice(e.target.value)}>
          <option value="">Choose a price</option>
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={s.label}>Car mileage / km</label>
        <div className={s.mileage}>
          <input
            type="number"
            placeholder="From"
            value={mileageFrom}
            onChange={(e) => setMileageFrom(e.target.value)}
            className={s.input}
          />
          <div className={s.divider}></div>
          <input
            type="number"
            placeholder="To"
            value={mileageTo}
            onChange={(e) => setMileageTo(e.target.value)}
            className={s.input}
          />
        </div>
      </div>

      <button type="submit">Search</button>
    </form>
  );
};

export default Filters;
