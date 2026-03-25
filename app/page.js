import BookingForm from "./components/booking-form";

const tourGroups = [
  {
    title: "Легкие туры",
    description:
      "Для первого знакомства с форматом, спокойного темпа и красивого дня без перегруза.",
    tours: [
      {
        title: "Парк Краснодар утром",
        location: "Краснодар",
        distance: "10-18 км",
        difficulty: "Легкий",
        duration: "2-4 часа",
        summary:
          "Ранний городской e-bike выезд с 5:00 до 9:00, пока парк особенно красив и свободен.",
        audience: "Новичкам, парам, занятым людям"
      },
      {
        title: "Краснодар зеленый",
        location: "Краснодар",
        distance: "18-28 км",
        difficulty: "Легкий",
        duration: "3-5 часов",
        summary:
          "Спокойный маршрут по зеленым зонам города с остановками и мягким темпом.",
        audience: "Новичкам, семьям, любителям природы"
      },
      {
        title: "Кубанский loop",
        location: "Краснодар / Новая Адыгея",
        distance: "22-35 км",
        difficulty: "Легкий-средний",
        duration: "4-6 часов",
        summary:
          "Круговой маршрут через Краснодар, Яблоновский и Новую Адыгею для первого полноценного однодневного выезда.",
        audience: "Парам, друзьям, мини-группам"
      }
    ]
  },
  {
    title: "Основные туры",
    description:
      "Главная линейка проекта: красивые, удобные и понятные маршруты для регулярных выездов.",
    tours: [
      {
        title: "Абрау-Дюрсо classic",
        location: "Абрау-Дюрсо",
        distance: "30-45 км",
        difficulty: "Средний",
        duration: "5-7 часов",
        summary:
          "Озеро, виноградники, красивые дороги и южная атмосфера выходного дня.",
        audience: "Парам, туристам, любителям красивых маршрутов"
      },
      {
        title: "Горячий Ключ: Скала Зеркало",
        location: "Горячий Ключ",
        distance: "25-40 км",
        difficulty: "Средний",
        duration: "5-6 часов",
        summary:
          "Лесной маршрут с природной достопримечательностью и хорошим форматом для e-bike тура.",
        audience: "Любителям природы и более насыщенных маршрутов"
      },
      {
        title: "Каменномостский - Хаджох - Руфабго",
        location: "Адыгея",
        distance: "20-30 км",
        difficulty: "Средний",
        duration: "5-7 часов",
        summary:
          "Один из самых туристических и впечатляющих маршрутов в Адыгее.",
        audience: "Туристам, парам, любителям природных мест"
      },
      {
        title: "ВелоSea: Геленджик - Кабардинка",
        location: "Геленджик / Кабардинка",
        distance: "25-40 км",
        difficulty: "Средний",
        duration: "5-7 часов",
        summary:
          "Море, красивые виды, набережные и фототочки. Один из самых ярких маршрутов проекта.",
        audience: "Парам, друзьям, туристам"
      }
    ]
  },
  {
    title: "Premium туры",
    description: "Для тех, кто хочет сильнее, ярче и более впечатляюще.",
    tours: [
      {
        title: "Гуамка - Мезмай",
        location: "Краснодарский край",
        distance: "22-35 км",
        difficulty: "Сложнее среднего",
        duration: "6-8 часов",
        summary:
          "Один из самых красивых горных маршрутов для мотивированной аудитории.",
        audience: "Тем, кто хочет более насыщенный и сильный маршрут"
      },
      {
        title: "Севастополь - Балаклава",
        location: "Крым",
        distance: "25-45 км",
        difficulty: "Средний",
        duration: "5-7 часов",
        summary:
          "Видовой крымский маршрут с сильным туристическим потенциалом и premium-ощущением.",
        audience: "Туристам, парам, мини-группам"
      }
    ]
  }
];

const formats = [
  {
    title: "Легкие",
    text:
      "Для первого знакомства с форматом, спокойного темпа и красивого дня без перегруза."
  },
  {
    title: "Видовые",
    text:
      "Маршруты ради красивых мест, панорам, фототочек и ощущения небольшого путешествия."
  },
  {
    title: "Горные",
    text:
      "Более насыщенные выезды с рельефом, природой и ощущением сильного маршрута."
  },
  {
    title: "Премиальные",
    text:
      "Самые впечатляющие маршруты с сильной атмосферой и красивой подачей."
  }
];

const keyPoints = [
  {
    title: "Однодневный формат",
    text:
      "Не нужно брать отпуск и собирать многодневный поход. Выехали, провели насыщенный день и вернулись."
  },
  {
    title: "Электровелосипеды",
    text:
      "Маршрут становится доступнее и комфортнее даже для тех, кто давно не катался."
  },
  {
    title: "С сопровождением",
    text:
      "Группа едет с организацией, понятным темпом и остановками в красивых местах."
  },
  {
    title: "Живой подход",
    text:
      "Это не потоковый сервис, а человеческий формат с атмосферой, общением и вниманием к людям."
  }
];

const contacts = [
  {
    label: "MAX Василий",
    value: "8 910 994-99-09",
    href: "https://max.ru/u/f9LHodD0cOIQCwmy0kabf3WXk8i7BjfSTjoZ9n0byYaQPUUnAuNjwZ_zqPc"
  },
  {
    label: "MAX Сергей",
    value: "8 961 525-55-59",
    href: "tel:+79615255559"
  },
  {
    label: "Telegram Василий",
    value: "@vs_voropaev",
    href: "https://t.me/vs_voropaev"
  },
  {
    label: "Telegram Сергей",
    value: "@SMNemtsev",
    href: "https://t.me/SMNemtsev"
  },
  {
    label: "Telegram-группа",
    value: "Походы Краснодар",
    href: "https://t.me/pohod_Krasnodar"
  }
];

const usefulLinks = [
  {
    title: "Контакты и запись",
    text: "Все каналы связи и короткий путь к записи.",
    href: "/contacts"
  },
  {
    title: "Правила участия",
    text: "Базовые правила выезда, формат участия и важные условия.",
    href: "/rules"
  },
  {
    title: "Страховка и переносы",
    text: "Что делать при погоде, переносе и как смотреть на страхование.",
    href: "/insurance"
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
          <a href="#formats">Форматы</a>
          <a href="#prices">Цены</a>
          <a href="#booking">Запись</a>
          <a href="/contacts">Контакты</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__content">
          <p className="eyebrow">VeloturYug.ru</p>
          <h1>Вело-туры на электровелосипедах в Краснодарском крае</h1>
          <p className="hero__lead">
            Однодневные маршруты по красивым местам Краснодарского края, Адыгеи и
            Крыма. Подходит даже новичкам.
          </p>
          <p className="section__text hero__support">
            Красивые локации, продуманные маршруты, сопровождение и живые впечатления
            за один день.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#tours">
              Выбрать маршрут
            </a>
            <a className="button button--ghost" href="https://max.ru/u/f9LHodD0cOIQCwmy0kabf3WXk8i7BjfSTjoZ9n0byYaQPUUnAuNjwZ_zqPc" target="_blank" rel="noopener noreferrer">
              Связаться в MAX
            </a>
          </div>
          <ul className="hero__stats" aria-label="Преимущества">
            <li>
              <strong>1 день</strong>
              <span>Формат выходного дня без отпуска и долгой подготовки</span>
            </li>
            <li>
              <strong>E-bike</strong>
              <span>Комфортный формат даже для тех, кто давно не катался</span>
            </li>
            <li>
              <strong>С сопровождением</strong>
              <span>Маршрут, темп и организация уже продуманы</span>
            </li>
          </ul>
        </div>
        <div className="hero__card">
          <p className="hero__card-label">О проекте</p>
          <h2>Мы любим свою страну и свой край</h2>
          <p>
            Любим путешествовать и открывать красивые места. В какой-то момент поняли,
            что есть свободная ниша, и из этого родился этот проект.
          </p>
          <p>
            Это не просто поездки. Это про атмосферу, людей и живые впечатления.
            Друзья, добро пожаловать.
          </p>
        </div>
      </section>

      <section className="section" id="formats">
        <div className="section__heading">
          <p className="eyebrow">Форматы туров</p>
          <h2>Можно выбрать не только маршрут, но и формат впечатления</h2>
        </div>
        <div className="formats-grid">
          {formats.map((format) => (
            <article className="format-card" key={format.title}>
              <h3>{format.title}</h3>
              <p>{format.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="lifestyle-grid">
          {keyPoints.map((item) => (
            <article className="lifestyle-card" key={item.title}>
              <p className="eyebrow">Почему это удобно</p>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="tours">
        <div className="section__heading">
          <p className="eyebrow">Маршруты</p>
          <h2>Понятные маршруты для разного уровня и настроения</h2>
          <p className="section__text">
            На главной оставляем только самое главное. Подробности дальше можно
            раскрывать через отдельные страницы и реальные материалы с выездов.
          </p>
        </div>
        <div className="tour-groups">
          {tourGroups.map((group) => (
            <section className="tour-group" key={group.title}>
              <div className="tour-group__intro">
                <p className="eyebrow">{group.title}</p>
                <p className="tour-group__description">{group.description}</p>
              </div>
              <div className="tour-grid">
                {group.tours.map((tour) => (
                  <article className="tour-card" key={tour.title}>
                    <p className="tour-card__region">{tour.location}</p>
                    <h3>{tour.title}</h3>
                    <p>{tour.summary}</p>
                    <div className="tour-card__meta">
                      <span>{tour.distance}</span>
                      <span>{tour.difficulty}</span>
                      <span>{tour.duration}</span>
                    </div>
                    <p className="tour-card__audience">
                      <strong>Кому подходит:</strong> {tour.audience}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="section section--pricing" id="prices">
        <div className="section__heading">
          <p className="eyebrow">Цены</p>
          <h2>Понятная стартовая стоимость без лишней сложности</h2>
          <p className="section__text">
            Стоимость зависит от маршрута, длительности и формата выезда, но для
            первого понимания можно ориентироваться на такую базу.
          </p>
        </div>
        <div className="price-highlight">
          <div>
            <p className="eyebrow">Базовая цена</p>
            <h3 className="price-highlight__value">от 4 500 ₽ за человека</h3>
            <p className="section__text">
              Итоговая стоимость зависит от конкретного маршрута, даты и формата
              участия.
            </p>
          </div>
          <div>
            <p className="eyebrow">Что входит в стоимость</p>
            <ul className="checklist">
              <li>электровелосипед для участия в выезде</li>
              <li>организация маршрута и сопровождение</li>
              <li>инструктаж перед стартом</li>
              <li>остановки в красивых точках по маршруту</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Важно знать</p>
          <h2>Подробности вынесены отдельно, чтобы главная оставалась легкой</h2>
        </div>
        <div className="audience-grid">
          {usefulLinks.map((item) => (
            <a className="audience-card" href={item.href} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section booking" id="booking">
        <div>
          <p className="eyebrow">Запись</p>
          <h2>Понятный путь к заявке без лишних шагов</h2>
          <p className="section__text">
            Можно сразу написать в MAX или Telegram, а можно оставить короткую заявку
            через форму и потом отправить ее в удобный мессенджер.
          </p>
        </div>
        <div className="booking-card">
          <div className="booking-card__actions booking-card__actions--top">
            <a className="button button--primary" href="https://max.ru/u/f9LHodD0cOIQCwmy0kabf3WXk8i7BjfSTjoZ9n0byYaQPUUnAuNjwZ_zqPc" target="_blank" rel="noopener noreferrer">
              MAX Василий
            </a>
            <a className="button button--ghost-light" href="https://t.me/vs_voropaev">
              Telegram Василий
            </a>
            <a className="button button--ghost-light" href="https://t.me/SMNemtsev">
              Telegram Сергей
            </a>
          </div>

          <div className="contact-list">
            {contacts.map((contact) => (
              <a className="contact-chip" href={contact.href} key={contact.label}>
                <span className="contact-chip__label">{contact.label}</span>
                <strong>{contact.value}</strong>
              </a>
            ))}
          </div>

          <BookingForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__brand">
          <p className="eyebrow">ВелоТур Юг</p>
          <h2>Однодневные e-bike выезды по югу России</h2>
          <p className="section__text">
            Организованные маршруты выходного дня по Краснодарскому краю, Адыгее и
            Крыму.
          </p>
        </div>
        <div className="site-footer__columns">
          <div>
            <p className="site-footer__title">Навигация</p>
            <ul className="footer-list">
              <li><a href="#formats">Форматы</a></li>
              <li><a href="#tours">Маршруты</a></li>
              <li><a href="#prices">Цены</a></li>
              <li><a href="#booking">Запись</a></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__title">Контакты</p>
            <ul className="footer-list">
              <li><a href="https://max.ru/u/f9LHodD0cOIQCwmy0kabf3WXk8i7BjfSTjoZ9n0byYaQPUUnAuNjwZ_zqPc" target="_blank" rel="noopener noreferrer">MAX Василий</a></li>
              <li><a href="tel:+79615255559">MAX Сергей: 8 961 525-55-59</a></li>
              <li><a href="https://t.me/vs_voropaev">Telegram Василий</a></li>
              <li><a href="https://t.me/SMNemtsev">Telegram Сергей</a></li>
            </ul>
          </div>
          <div>
            <p className="site-footer__title">Дополнительно</p>
            <ul className="footer-list">
              <li><a href="/contacts">Контакты и запись</a></li>
              <li><a href="/rules">Правила участия</a></li>
              <li><a href="/insurance">Страховка и переносы</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="mobile-cta">
        <a className="mobile-cta__link mobile-cta__link--ghost" href="#tours">
          Маршруты
        </a>
        <a className="mobile-cta__link" href="https://max.ru/u/f9LHodD0cOIQCwmy0kabf3WXk8i7BjfSTjoZ9n0byYaQPUUnAuNjwZ_zqPc" target="_blank" rel="noopener noreferrer">
          MAX
        </a>
      </div>
    </main>
  );
}
