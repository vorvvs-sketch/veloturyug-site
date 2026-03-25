"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const message = [
      "Здравствуйте! Хочу записаться на вело-тур.",
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Комментарий: ${comment || "-"}`
    ].join("\n");

    try {
      await navigator.clipboard.writeText(message);
      setStatus("Текст заявки скопирован. Вставьте его в MAX или Telegram.");
    } catch {
      setStatus("Не получилось скопировать автоматически. Скопируйте текст вручную и отправьте его в MAX или Telegram.");
    }
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
        Скопировать заявку
      </button>

      <p className="booking-form__note">
        После этого можно открыть MAX или Telegram и отправить текст удобному контакту.
      </p>

      {status ? <p className="booking-form__status">{status}</p> : null}
    </form>
  );
}
