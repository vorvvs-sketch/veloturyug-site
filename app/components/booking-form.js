"use client";

import { useState } from "react";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const buildMessage = () =>
    [
      "Здравствуйте! Хочу записаться на вело-тур.",
      `Имя: ${name || "-"}`,
      `Телефон: ${phone || "-"}`,
      `Комментарий: ${comment || "-"}`
    ].join("\n");

  const copyFallback = async (message, fallbackText) => {
    try {
      await navigator.clipboard.writeText(message);
      setStatus(fallbackText);
    } catch {
      setStatus(
        "Не получилось отправить автоматически. Скопируйте текст заявки вручную и отправьте его в MAX или Telegram."
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = buildMessage();
    setIsSending(true);
    setStatus("");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, phone, comment, message })
      });

      const payload = await response.json();

      if (!response.ok) {
        await copyFallback(
          message,
          payload?.fallbackMessage ||
            "Бот пока не подключен. Текст заявки скопирован, отправьте его в MAX или Telegram."
        );
        return;
      }

      setStatus("Заявка отправлена в Telegram. Мы свяжемся с вами.");
      setName("");
      setPhone("");
      setComment("");
    } catch {
      await copyFallback(
        message,
        "Не получилось отправить автоматически. Текст заявки скопирован, отправьте его в MAX или Telegram."
      );
    } finally {
      setIsSending(false);
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
          required
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
          required
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

      <button
        className="button button--primary booking-form__submit"
        type="submit"
        disabled={isSending}
      >
        {isSending ? "Отправляем..." : "Отправить заявку"}
      </button>

      <p className="booking-form__note">
        Если Telegram-бот еще не подключен, форма сама предложит запасной путь через
        MAX или Telegram.
      </p>

      {status ? <p className="booking-form__status">{status}</p> : null}
    </form>
  );
}
