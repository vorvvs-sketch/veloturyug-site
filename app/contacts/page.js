export const metadata = {
  title: "Контакты и запись | ВелоТур Юг",
  description:
    "Контакты проекта ВелоТур Юг, способы записи на выезды и идеи для сотрудничества."
};

const bookingChannels = [
  {
    title: "MAX Василий",
    text:
      "Основной контакт по вопросам записи, формата выезда и общих деталей проекта.",
    linkLabel: "Позвонить 8 910 994-99-09",
    href: "tel:+79109949909"
  },
  {
    title: "MAX Сергей",
    text:
      "Контакт для уточнения участия, логистики, времени старта и организационных деталей.",
    linkLabel: "Позвонить 8 961 525-55-59",
    href: "tel:+79615255559"
  },
  {
    title: "Telegram Василий",
    text: "Личный Telegram для быстрой связи и обсуждения маршрутов.",
    linkLabel: "@vs_voropaev",
    href: "https://t.me/vs_voropaev"
  },
  {
    title: "Telegram Сергей",
    text: "Еще один прямой контакт в Telegram для вопросов и записи.",
    linkLabel: "@SMNemtsev",
    href: "https://t.me/SMNemtsev"
  },
  {
    title: "Telegram-группа",
    text: "Группа «Походы Краснодар» для анонсов, общения и будущих выездов.",
    linkLabel: "Открыть группу",
    href: "https://t.me/pohod_Krasnodar"
  }
];

const bookingFlow = [
  "Напишите или позвоните, чтобы обсудить подходящий маршрут.",
  "Мы уточним уровень группы, формат участия и ближайшие даты.",
  "После согласования маршрута и условий подтвердим запись."
];

const collaborations = [
  {
    title: "Отели и гостевые дома",
    text:
      "Можно делать совместные предложения для гостей региона: прогулки, выезды выходного дня и рекомендации маршрутов."
  },
  {
    title: "Турбазы и локации отдыха",
    text:
      "Сотрудничество по маршрутам, точкам старта, остановкам и совместному продвижению."
  },
  {
    title: "Корпоративные мини-группы",
    text:
      "Отдельные выезды для небольших команд, дружеских компаний и локальных мероприятий."
  },
  {
    title: "Фото, видео и контент",
    text:
      "Совместные выезды с фотографами, видеографами, локальными медиа и блогерами."
  }
];

export default function ContactsPage() {
  return (
    <main className="page-shell legal-page">
      <header className="legal-header">
        <p className="eyebrow">ВелоТур Юг</p>
        <h1>Контакты и запись</h1>
        <p className="section__text">
          Здесь собраны основные каналы связи для записи на выезды, вопросов по
          маршрутам и предложений о сотрудничестве.
        </p>
      </header>

      <section className="legal-grid">
        {bookingChannels.map((channel) => (
          <article className="legal-card" key={channel.title}>
            <h2>{channel.title}</h2>
            <p className="section__text">{channel.text}</p>
            <a className="button button--primary" href={channel.href}>
              {channel.linkLabel}
            </a>
          </article>
        ))}
      </section>

      <section className="legal-grid">
        <article className="legal-card">
          <h2>Как записаться</h2>
          <ul className="plain-list">
            {bookingFlow.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="legal-card legal-card--accent">
          <h2>Как удобнее связаться</h2>
          <p className="section__text">
            Сейчас основной и самый надежный способ связи для проекта - MAX и
            Telegram. Можно выбрать любой удобный контакт выше.
          </p>
          <a className="button button--primary" href="https://t.me/vs_voropaev">
            Написать в Telegram
          </a>
        </article>
      </section>

      <section className="legal-section">
        <div className="section__heading">
          <p className="eyebrow">Сотрудничество</p>
          <h2>Ищем единомышленников и партнеров в проект</h2>
          <p className="section__text">
            Проект можно развивать не только как выезды для частных участников, но и
            как партнерский продукт для локального туризма, отдыха и мероприятий.
          </p>
        </div>
        <div className="audience-grid">
          {collaborations.map((item) => (
            <article className="audience-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
