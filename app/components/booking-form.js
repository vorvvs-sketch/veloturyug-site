"use client";

import { useState } from "react";

const whatsappBaseUrl = "https://wa.me/79615255559";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      "Здравствуйте! Хочу записаться на вело-тур.",
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Комментарий: ${comment || "-"}`
    ].join("\n");

    const url = `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <label className="booking-form__field">
        <span>Имя</span>
        <input
          name="name"
          type="text"
          placeholder="Как к вам обращаться"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>

      <label className="booking-form__field">
        <span>Телефон</span>
        <input
          name="phone"
          type="tel"
          placeholder="+7..."
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </label>

      <label className="booking-form__field">
        <span>Комментарий</span>
        <textarea
          name="comment"
          rows="4"
          placeholder="Например: интересует маршрут для двоих на выходных"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
      </label>

      <button className="button button--primary booking-form__submit" type="submit">
        Отправить в WhatsApp
      </button>
    </form>
  );
}
