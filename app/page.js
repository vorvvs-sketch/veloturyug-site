const tours = [
  {
    title: "Плавни Краснодара и мягкий старт",
    location: "Краснодар",
    distance: "25-35 км",
    pace: "Спокойный",
    summary:
      "Маршрут для первого знакомства с форматом: красивая природа рядом с городом, легкий темп и много комфортных остановок.",
    features: [
      "Подходит новичкам",
      "Небольшой рельеф",
      "Хорош для первой поездки на e-bike"
    ]
  },
  {
    title: "Предгорья Адыгеи за один день",
    location: "Адыгея",
    distance: "35-50 км",
    pace: "Средний",
    summary:
      "Лесные дороги, панорамы и ощущение настоящего выезда на природу без необходимости ехать в многодневный поход.",
    features: [
      "Видовые участки",
      "Авторский маршрут",
      "Красивые фототочки"
    ]
  },
  {
    title: "Холмы и винные дороги края",
    location: "Краснодарский край",
    distance: "30-45 км",
    pace: "Комфортный",
    summary:
      "Насыщенный день с красивыми дорогами, природой и приятной нагрузкой, которую помогает держать электровелосипед.",
    features: [
      "Для пар и друзей",
      "Хороший формат выходного дня",
      "Комфортный активный отдых"
    ]
  }
];

const benefits = [
  "Наши электровелосипеды позволяют ехать комфортно даже тем, кто давно не катался.",
  "Малые группы до 8-10 человек создают спокойную атмосферу без спешки и толпы.",
  "С вами едут организаторы, которые знают маршрут, логистику и темп реальной группы.",
  "Вы получаете готовый отдых одним днем, а не список задач по аренде, транспорту и планированию."
];

const included = [
  "Электровелосипед, подготовленный к выезду",
  "Сопровождение организаторов на маршруте",
  "Подбор маршрута под уровень группы",
  "Инструктаж перед стартом",
  "Остановки в красивых точках и поддержка по пути"
];

const notIncluded = [
  "Трансфер до точки старта, если он не указан отдельно",
  "Личное питание и индивидуальные расходы",
  "Экстремальные участки и соревновательный формат"
];

const steps = [
  "Вы оставляете заявку и выбираете подходящий тур.",
  "Мы связываемся, уточняем опыт, дату, состав группы и формат участия.",
  "Ко дню выезда готовим велосипеды, маршрут и точку встречи.",
  "На месте проводим короткий инструктаж и настраиваем посадку.",
  "Едем маршрут в комфортном темпе с остановками, фото и поддержкой."
];

const prices = [
  {
    name: "Групповой тур на нашем e-bike",
    value: "от 4 500 ₽",
    note: "Базовый и самый удобный формат для старта"
  },
  {
    name: "Участие со своим велосипедом",
    value: "от 2 500 ₽",
    note: "Подходит тем, кто хочет ехать с группой на своей технике"
  },
  {
    name: "Индивидуальный или мини-групповой выезд",
    value: "по запросу",
    note: "Для пары, семьи или компании друзей в отдельном формате"
  }
];

const faq = [
  {
    question: "Нужна ли хорошая физическая форма?",
    answer:
      "Нет. Формат рассчитан не только на опытных райдеров. Электровелосипед помогает проходить маршрут намного комфортнее."
  },
  {
    question: "Можно ли поехать без своего велосипеда?",
    answer:
      "Да. Это один из ключевых плюсов проекта: вы приезжаете, получаете наш e-bike и едете в составе группы."
  },
  {
    question: "Что если испортится погода?",
    answer:
      "Мы заранее связываемся с участниками и переносим тур или предлагаем другую дату, если условия становятся некомфортными."
  },
  {
    question: "Кому особенно подходит такой формат?",
    answer:
      "Парам, друзьям, жителям Краснодара, гостям региона и тем, кто хочет красивый активный выходной без многодневной подготовки."
  }
];

const directions = [
  "Краснодар и окрестности",
  "Краснодарский край",
  "Адыгея",
  "Крым как следующее направление развития"
];

const organizers = [
  {
    title: "Василий",
    text:
      "Организатор проекта. Собирает группу, ведет запись, отвечает за атмосферу поездки и развитие формата однодневных e-bike туров."
  },
  {
    title: "Сергей",
    text:
      "Напарник с опытом велопоходов. Помогает с маршрутом, темпом группы и практической частью выезда, чтобы участники чувствовали себя уверенно."
  }
];

const trustPoints = [
  "Небольшая группа вместо толпы и суеты",
  "Живые маршруты, а не абстрактные обещания",
  "Электровелосипеды для комфортного старта даже новичкам",
  "Сопровождение на всем маршруте",
  "Формат знакомства, общения и красивого активного выходного"
];

const contacts = [
  {
    label: "Василий",
    value: "8 910 994-99-09",
    href: "tel:+79109949909"
  },
  {
    label: "Сергей",
    value: "8 961 525-55-59",
    href: "tel:+79615255559"
  },
  {
    label: "Telegram",
    value: "@vs_voropaev",
    href: "https://t.me/vs_voropaev"
  },
  {
    label: "WhatsApp",
    value: "Написать Сергею",
    href: "https://wa.me/79615255559"
  }
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="topbar__brand" href="#top">
          <span className="topbar__dot" />
          ВелоТур Юг
        </a>
        <nav className="topbar__nav" aria-label="Навигация по странице">
          <a href="#tours">Маршруты</a>
          <a href="#about">О проекте</a>
          <a href="#prices">Цены</a>
          <a href="#booking">Запись</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">VeloturYug.ru</p>
          <h1>Однодневные e-bike туры по югу России</h1>
          <p className="hero__lead">
            Авторские поездки по Краснодару, Краснодарскому краю и Адыгее на
            электровелосипедах с сопровождением, красивыми маршрутами и малой
            группой до 10 человек.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#booking">
              Оставить заявку
            </a>
            <a className="button button--ghost" href="#tours">
              Выбрать маршрут
            </a>
          </div>
          <ul className="hero__stats" aria-label="Преимущества">
            <li>
              <strong>1 день</strong>
              <span>Формат выходного дня без отпуска и сложной подготовки</span>
            </li>
            <li>
              <strong>8-10 человек</strong>
              <span>Небольшая группа, живое общение и комфортный темп</span>
            </li>
            <li>
              <strong>Наши e-bike</strong>
              <span>Приехали, получили велосипед и сразу поехали</span>
            </li>
          </ul>
        </div>
        <div className="hero__card">
          <p className="hero__card-label">Идея проекта</p>
          <h2>Красивый активный день без перегруза</h2>
          <p>
            Мы собираем группу, привозим электровелосипеды, проводим по
            интересному маршруту и создаем формат отдыха, в котором важны не
            километры ради галочки, а впечатления, природа и настроение.
          </p>
          <div className="hero__pill-list">
            {directions.map((direction) => (
              <span className="hero__pill" key={direction}>
                {direction}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--split" id="about">
        <div>
          <p className="eyebrow">О проекте</p>
          <h2>Не просто покататься, а провести красивый день в хорошей компании</h2>
          <p className="section__text">
            В основе проекта простая идея: собрать небольшую группу, дать людям
            удобные электровелосипеды, показать природу юга и сделать выезд
            комфортным даже для тех, кто давно не катался или никогда не ездил в
            подобном формате.
          </p>
          <p className="section__text">
            Это не спорт ради результата и не сухой прокат техники. Это
            организованный день на маршруте, где важны впечатления, красота,
            безопасность, ритм группы и удовольствие от самой поездки.
          </p>
        </div>
        <div className="stack-card">
          {organizers.map((item) => (
            <article className="mini-card" key={item.title}>
              <p className="mini-card__label">{item.title}</p>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section__heading">
          <p className="eyebrow">Маршруты</p>
          <h2>Первая линейка туров для запуска проекта</h2>
          <p className="section__text">
            На старте достаточно 2-3 сильных маршрутов. Ниже структура, которая
            уже выглядит как реальное предложение, а не как черновик идеи.
          </p>
        </div>
        <div className="tour-grid">
          {tours.map((tour) => (
            <article className="tour-card" key={tour.title}>
              <p className="tour-card__region">{tour.location}</p>
              <h3>{tour.title}</h3>
              <p>{tour.summary}</p>
              <div className="tour-card__meta">
                <span>{tour.distance}</span>
                <span>{tour.pace}</span>
              </div>
              <ul className="tag-list">
                {tour.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--accent">
        <div className="section__heading">
          <p className="eyebrow">Почему с нами удобно</p>
          <h2>Ты продаешь не прокат велосипеда, а готовый опыт выходного дня</h2>
        </div>
        <div className="reason-grid">
          {benefits.map((benefit) => (
            <article className="reason-card" key={benefit}>
              <p>{benefit}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="trust-panel">
          <p className="eyebrow">Почему вам могут доверять</p>
          <h2>У проекта уже есть понятная логика, а не просто идея “когда-нибудь начать”</h2>
          <p className="section__text">
            Велосипеды планируются под реальные заявки, маршруты подбираются под
            формат группы, а выезды проходят с сопровождением двух людей. Это
            делает предложение более живым, понятным и внушающим доверие.
          </p>
        </div>
        <div className="trust-list">
          {trustPoints.map((point) => (
            <article className="trust-item" key={point}>
              <span className="trust-item__mark" />
              <p>{point}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div>
          <p className="eyebrow">Как проходит тур</p>
          <h2>Понятный путь от заявки до финиша</h2>
          <ol className="steps">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <aside className="info-panel">
          <p className="info-panel__title">Кому особенно подойдет формат</p>
          <ul>
            <li>Тем, кто хочет активный отдых без жесткой спортивной нагрузки</li>
            <li>Парам и друзьям, которым нужен красивый выходной</li>
            <li>Гостям региона, которым важна готовая организация</li>
            <li>Людям, которым интересны новые знакомства и живое общение</li>
          </ul>
        </aside>
      </section>

      <section className="section section--pricing" id="prices">
        <div className="section__heading">
          <p className="eyebrow">Цены</p>
          <h2>Простая ценовая модель для первого запуска</h2>
        </div>
        <div className="pricing-grid">
          {prices.map((price) => (
            <article className="price-card" key={price.name}>
              <h3>{price.name}</h3>
              <p className="price-card__value">{price.value}</p>
              <p>{price.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--split">
        <div className="checklist-card">
          <p className="eyebrow">Что включено</p>
          <h2>То, за что клиент реально готов платить</h2>
          <ul className="checklist">
            {included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="checklist-card checklist-card--soft">
          <p className="eyebrow">Что не входит</p>
          <h2>Чтобы ожидания были честными с самого начала</h2>
          <ul className="checklist checklist--muted">
            {notIncluded.map((item) => (
              <li key={item}>{item}</li>
            ))}
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
          <p className="eyebrow">Запись</p>
          <h2>Сайт уже можно использовать как рабочую точку для первых заявок</h2>
          <p className="section__text">
            На этом этапе можно поставить реальные контакты, даты ближайших
            выездов, фото и перейти от идеи к первым бронированиям.
          </p>
        </div>
        <div className="booking-card">
          <p className="booking-card__lead">Минимум, чтобы сайт начал работать</p>
          <ul>
            <li>Телефон или WhatsApp для быстрой записи</li>
            <li>2-3 ближайшие даты выездов</li>
            <li>Несколько реальных фото с маршрутов</li>
            <li>Короткий блок о вас и вашем опыте</li>
          </ul>
          <div className="contact-list">
            {contacts.map((contact) => (
              <a className="contact-chip" href={contact.href} key={contact.label}>
                <span className="contact-chip__label">{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>
          <div className="booking-card__actions">
            <a className="button button--primary" href="https://wa.me/79615255559">
              Написать в WhatsApp
            </a>
            <a className="button button--ghost-light" href="https://t.me/vs_voropaev">
              Открыть Telegram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
