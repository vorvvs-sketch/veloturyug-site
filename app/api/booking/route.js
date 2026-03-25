export async function POST(request) {
  try {
    const body = await request.json();
    const message =
      body?.message ||
      [
        "Здравствуйте! Хочу записаться на вело-тур.",
        `Имя: ${body?.name || "-"}`,
        `Телефон: ${body?.phone || "-"}`,
        `Комментарий: ${body?.comment || "-"}`
      ].join("\n");

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return Response.json(
        {
          ok: false,
          fallbackMessage:
            "Бот пока не подключен. Текст заявки можно отправить в MAX или Telegram."
        },
        { status: 503 }
      );
    }

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        }),
        cache: "no-store"
      }
    );

    if (!telegramResponse.ok) {
      return Response.json(
        {
          ok: false,
          fallbackMessage:
            "Не получилось отправить в Telegram-бота. Попробуйте MAX или Telegram вручную."
        },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json(
      {
        ok: false,
        fallbackMessage:
          "Произошла ошибка при отправке. Попробуйте написать нам напрямую."
      },
      { status: 500 }
    );
  }
}
