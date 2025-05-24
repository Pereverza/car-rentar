import { type FC, useState } from "react";
import s from "./BookingForm.module.css";

const BookingForm: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👇 Тут можна додати логіку запиту (поки що — фейкове підтвердження)
    console.log("Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000); // зникає через 3с
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <div className={s.titleWrapper}>
        <h2 className={s.title}>Book your car now</h2>
        <p className={s.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        placeholder="Booking date"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <textarea
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
      />
      <button type="submit">Book now</button>
      {submitted && <p className={s.success}>✅ Car successfully booked!</p>}
    </form>
  );
};

export default BookingForm;
