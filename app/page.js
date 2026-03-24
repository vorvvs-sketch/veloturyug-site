const featuredTours = [
  {
    title: "Краснодарские плавни и закат у воды",
    region: "Краснодар",
    distance: "25-35 км",
    details:
      "Неспешный маршрут для первого знакомства с форматом: природа рядом с городом, фото-точки и мягкий темп."
  },
  {
    title: "Предгорья Адыгеи за один день",
    region: "Адыгея",
    distance: "35-50 км",
    details:
      "Панорамы, лесные дороги и длинные красивые участки, которые комфортно проходить даже без большой подготовки."
  },
  {
    title: "Винные дороги и холмы края",
    region: "Краснодарский край",
    distance: "30-45 км",
    details:
      "Авторский выезд по живописным дорогам и смотровым точкам для тех, кто хочет активный, но комфортный день."
  }
];

const reasons = [
  "Электровелосипеды снимают лишнюю нагрузку и делают маршрут доступнее.",
  "Малые группы до 8-10 человек дают спокойный темп и живое общение.",
  "Вы едете с проводниками, которые знают маршрут, остановки и безопасные участки.",
  "Это готовый отдых одним днем: встретились, выехали, увидели красивые места, вернулись с эмоциями."
];

const steps = [
  "Вы выбираете тур и оставляете заявку.",
  "Мы подтверждаем дату, маршрут, уровень сложности и место старта.",
  "Привозим велосипеды, проверяем посадку и проводим короткий инструктаж.",
  "Проходим маршрут с остановками, фото-точками и поддержкой на всем пути."
];

const faq = [
  {
    question: "Нужна ли спортивная подготовка?",
    answer:
      "Нет. Формат подходит новичкам и тем, кто хочет активный отдых без изматывающей нагрузки."
  },
  {
    question: "Можно ли приехать без своего велосипеда?",
    answer:
      "Да. Основной формат проекта как раз рассчитан на поездки на наших электровелосипедах."
  },
  {
    question: "Что, если испортится погода?",
    answer:
      "Мы заранее связываемся с участниками и переносим выезд или предлагаем другую дату."
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">VeloturYug.ru</p>
          <h1>Однодневные e-bike туры по югу, куда хочется возвращаться</h1>
          <p className="hero__lead">
            Авторские маршруты по Краснодару, краю и Адыгее с нашими
            электровелосипедами, сопровождением и малой группой до 10 человек.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#booking">
              Записаться на тур
            </a>
            <a className="button button--ghost" href="#tours">
              Смотреть маршруты
            </a>
          </div>
          <ul className="hero__stats" aria-label="Преимущества тура">
            <li>
              <strong>1 день</strong>
              <span>без отпуска и сложной подготовки</span>
            </li>
            <li>
              <strong>8-10 человек</strong>
              <span>спокойный темп и новые знакомства</span>
            </li>
            <li>
              <strong>Наши e-bike</strong>
              <span>приехали, получили велосипед и поехали</span>
            </li>
          </ul>
        </div>
        <div className="hero__card">
          <p className="hero__card-label">Формат проекта</p>
          <h2>Красота природы без гонки на выносливость</h2>
          <p>
            Мы собираем небольшую группу, привозим электровелосипеды и проводим
            насыщенный день на красивом маршруте. Подходит для друзей, пар и
            тех, кто хочет активный отдых без перегруза.
          </p>
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section__heading">
          <p className="eyebrow">Маршруты</p>
          <h2>С чего можно стартовать</h2>
        </div>
        <div className="tour-grid">
          {featuredTours.map((tour) => (
            <article className="tour-card" key={tour.title}>
              <p className="tour-card__region">{tour.region}</p>
              <h3>{tour.title}</h3>
              <p>{tour.details}</p>
              <span>{tour.distance}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__heading">
          <p className="eyebrow">Почему это удобно</p>
          <h2>Вы приезжаете за впечатлениями, а не за организационной головной болью</h2>
        </div>
        <div className="reason-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason}>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Как проходит тур</p>
          <h2>Понятный путь от заявки до выезда</h2>
        </div>
        <ol className="steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">Кому подойдет</p>
          <h2>Новичкам, парам, друзьям и тем, кто давно хотел выбраться на природу</h2>
          <p className="section__text">
            Формат однодневных выездов особенно удобен для жителей Краснодара и
            гостей региона: не нужно искать прокат, строить маршрут и думать о
            логистике. Все самое сложное мы берем на себя.
          </p>
        </div>
        <div className="info-panel">
          <p>На старте сайт можно использовать как рабочую витрину проекта:</p>
          <ul>
            <li>собрать первые заявки;</li>
            <li>показать маршруты и формат поездки;</li>
            <li>объяснить, что включено в стоимость;</li>
            <li>переводить людей в Telegram или WhatsApp.</li>
          </ul>
        </div>
      </section>

      <section className="section section--faq">
        <div className="section__heading">
          <p className="eyebrow">FAQ</p>
          <h2>Частые вопросы перед первой поездкой</h2>
        </div>
        <div className="faq-list">
          {faq.map((item) => (
            <article className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section booking" id="booking">
        <div>
          <p className="eyebrow">Запуск проекта</p>
          <h2>Сайт уже можно превратить в рабочую точку сбора заявок</h2>
          <p className="section__text">
            На старте достаточно поставить реальные контакты, даты ближайших
            выездов и 2-3 проверенных маршрута. Этого хватит, чтобы начать
            принимать первые записи.
          </p>
        </div>
        <div className="booking-card">
          <p>Что добавить следующим шагом:</p>
          <ul>
            <li>Telegram и WhatsApp;</li>
            <li>кнопку быстрой записи;</li>
            <li>цены и ближайшие даты;</li>
            <li>реальные фото с тестовых маршрутов.</li>
          </ul>
          <a className="button button--primary" href="mailto:hello@veloturyug.ru">
            Контакт для запуска
          </a>
        </div>
      </section>
    </main>
  );
}
