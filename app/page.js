const tourGroups = [
  {
    title: "Легкие туры",
    description:
      "Идеальны для первого знакомства с форматом, пар, новичков и тех, кто хочет красивый активный день без перегруза.",
    tours: [
      {
        title: "Парк Краснодар утром",
        location: "Краснодар",
        distance: "10-18 км",
        pace: "Легкий",
        summary:
          "Ранний городской e-bike выезд с 5:00 до 9:00, пока парк особенно красив и свободен.",
        features: [
          "Фирменная фишка проекта",
          "Маршрут для промо",
          "Идеален для новичков"
        ]
      },
      {
        title: "Краснодар зелёный",
        location: "Краснодар",
        distance: "18-28 км",
        pace: "Спокойный",
        summary:
          "Спокойный маршрут по зеленым зонам города с мягким темпом и остановками.",
        features: [
          "Городской scenic ride",
          "Подходит семьям и парам",
          "Удобный старт"
        ]
      },
      {
        title: "Кубанский loop",
        location: "Краснодар / Новая Адыгея",
        distance: "22-35 км",
        pace: "Легкий-средний",
        summary:
          "Круговой маршрут через Краснодар, Яблоновский и Новую Адыгею для первого полноценного однодневного выезда.",
        features: [
          "Кольцевой маршрут",
          "Подходит для первых групп",
          "Хорош для корпоративного формата"
        ]
      }
    ]
  },
  {
    title: "Основные туры",
    description:
      "Главная линейка проекта: самые удобные, красивые и понятные маршруты для продаж и регулярных выездов.",
    tours: [
      {
        title: "Абрау-Дюрсо classic",
        location: "Абрау-Дюрсо",
        distance: "30-45 км",
        pace: "Комфортный",
        summary:
          "Озеро, виноградники, красивые дороги и южная атмосфера выходного дня.",
        features: [
          "Видовые точки",
          "Премиальная локация",
          "Сильный туристический продукт"
        ]
      },
      {
        title: "Горячий Ключ: Скала Зеркало",
        location: "Горячий Ключ",
        distance: "25-40 км",
        pace: "Средний",
        summary:
          "Лесной маршрут с природной достопримечательностью и хорошим форматом для e-bike тура.",
        features: [
          "Близко к Краснодару",
          "Лес и природа",
          "Удачен для регулярных выездов"
        ]
      },
      {
        title: "Каменномостский - Хаджох - Руфабго",
        location: "Адыгея",
        distance: "20-30 км",
        pace: "Средний",
        summary:
          "Один из самых туристических и впечатляющих маршрутов в Адыгее.",
        features: [
          "Туристические точки",
          "Хорош для гостей региона",
          "Подходит для продажи впечатлений"
        ]
      },
      {
        title: "ВелоSea: Геленджик - Кабардинка",
        location: "Геленджик / Кабардинка",
        distance: "25-40 км",
        pace: "Прогулочный",
        summary:
          "Море, красивые виды, набережные и фототочки. Один из самых ярких маршрутов для узнаваемого старта проекта.",
        features: [
          "Морской маршрут",
          "Подходит для рекламы",
          "Хорош для пар и друзей"
        ]
      }
    ]
  },
  {
    title: "Premium туры",
    description:
      "Для тех, кто хочет более яркий, насыщенный и запоминающийся маршрут.",
    tours: [
      {
        title: "Гуамка - Мезмай",
        location: "Краснодарский край",
        distance: "22-35 км",
        pace: "Средний-сильный",
        summary:
          "Один из самых красивых горных маршрутов для мотивированной аудитории и premium-подачи.",
        features: [
          "Горный scenic",
          "Сильное впечатление",
          "Подходит для premium-формата"
        ]
      },
      {
        title: "Севастополь - Балаклава",
        location: "Крым",
        distance: "25-45 км",
        pace: "Средний",
        summary:
          "Видовой крымский маршрут с сильным туристическим потенциалом и премиальным ощущением поездки.",
        features: [
          "Крымский туристический формат",
          "Подходит для мини-групп",
          "Сильная визуальная подача"
        ]
      }
    ]
  },
  {
    title: "Скоро в расписании",
    description:
      "Маршруты, которые мы тестируем и готовим к запуску после обкатки основной линейки.",
    tours: [
      {
        title: "Лаго-Наки viewpoints",
        location: "Адыгея",
        distance: "20-35 км",
        pace: "Сильный",
        summary:
          "Высотный видовой маршрут, который требует более точной подготовки и погодного окна.",
        features: [
          "Высокий вау-эффект",
          "Для сильной аудитории",
          "После дополнительной разведки"
        ]
      },
      {
        title: "Сукко - Большой Утриш",
        location: "Сукко / Утриш",
        distance: "25-35 км",
        pace: "Комфортный",
        summary:
          "Побережье, можжевеловые пейзажи и сильная визуальная подача для будущих выездов.",
        features: [
          "Море и природа",
          "Хорош для фото",
          "Нужна доразведка"
        ]
      },
      {
        title: "Шапсугская: дольмены и вулкан",
        location: "Краснодарский край",
        distance: "20-35 км",
        pace: "Средний",
        summary:
          "Более приключенческий маршрут с природными и археологическими точками интереса.",
        features: [
          "Нестандартная подача",
          "Adventure-формат",
          "После тестовых выездов"
        ]
      },
      {
        title: "Тамань - Веселовка - Бугазская коса",
        location: "Тамань",
        distance: "25-45 км",
        pace: "Средний",
        summary:
          "Морской и ветреный маршрут с сильной атмосферой, который лучше запускать после точной логистической подготовки.",
        features: [
          "Южный coastal vibe",
          "Нужна погодная осторожность",
          "Хорош для второй волны"
        ]
      }
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
  },
  {
    question: "Как происходит запись на выезд?",
    answer:
      "Вы пишете нам в Telegram, WhatsApp или звоните, после чего мы уточняем маршрут, формат участия и ближайшую подходящую дату."
  },
  {
    question: "Когда лучше записываться?",
    answer:
      "Чем раньше, тем удобнее собрать группу и подготовить формат выезда. Для отдельных маршрутов запись лучше согласовывать заранее."
  },
  {
    question: "Что происходит при плохой погоде?",
    answer:
      "Если погодные условия делают выезд некомфортным или небезопасным, мы переносим поездку или предлагаем другой формат."
  },
  {
    question: "Можно ли приехать своей компанией отдельно?",
    answer:
      "Да. Мы можем обсуждать отдельный выезд для пары, семьи, друзей или небольшой корпоративной группы."
  },
  {
    question: "Нужно ли что-то оплачивать заранее?",
    answer:
      "Финальные условия записи и подтверждения участия лучше согласовывать отдельно по конкретному маршруту и дате выезда."
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
    label: "Telegram-группа",
    value: "Походы Краснодар",
    href: "https://t.me/pohod_Krasnodar"
  },
  {
    label: "WhatsApp",
    value: "Написать Сергею",
    href: "https://wa.me/79615255559"
  }
];

const upcomingRides = [
  {
    title: "Парк Краснодар утром",
    note: "Ранний формат 5:00-9:00",
    status: "Открываем запись"
  },
  {
    title: "ВелоSea: Геленджик - Кабардинка",
    note: "Выезд в хороший погодный день",
    status: "Ближайший анонс"
  },
  {
    title: "Абрау-Дюрсо classic",
    note: "Маршрут выходного дня",
    status: "Скоро в расписании"
  }
];

const routeLevels = [
  {
    title: "Легкий",
    text:
      "Для новичков, пар, семей и тех, кто давно не катался. Спокойный темп, короткая дистанция и акцент на комфорт."
  },
  {
    title: "Средний",
    text:
      "Для тех, кто хочет насыщенный день на природе и готов к более длинному маршруту, но без экстремальной нагрузки."
  },
  {
    title: "Сильный / premium",
    text:
      "Для уверенной аудитории, которая хочет яркий видовой маршрут, более серьезный рельеф и сильное впечатление от поездки."
  }
];

const packingList = [
  "Удобная одежда по погоде",
  "Закрытая спортивная обувь",
  "Вода и легкий перекус",
  "Очки, крем от солнца, головной убор",
  "Небольшой рюкзак или поясная сумка"
];

const bookingSteps = [
  "Вы пишете нам в Telegram, WhatsApp или звоните.",
  "Мы помогаем выбрать маршрут под ваш уровень и формат поездки.",
  "Подтверждаем дату, место старта и детали участия.",
  "В день выезда встречаемся, проводим инструктаж и едем маршрут."
];

const ebikeReasons = [
  "Маршрут становится доступнее даже тем, кто давно не катался.",
  "Подъемы и длинные участки проходятся комфортнее и без перегруза.",
  "В группе легче держать общий темп, даже если участники разного уровня.",
  "Можно больше смотреть по сторонам, фотографироваться и получать удовольствие от самой поездки."
];

const audiences = [
  {
    title: "Пары",
    text:
      "Для тех, кто хочет необычный красивый выходной, а не просто прогулку по одному и тому же маршруту."
  },
  {
    title: "Новички",
    text:
      "Для людей без серьезной подготовки, которым нужен мягкий вход в велотуризм без страха не справиться."
  },
  {
    title: "Туристы",
    text:
      "Для гостей региона, которые хотят увидеть природу и красивые локации не из окна машины, а в живом формате."
  },
  {
    title: "Мини-группы и компании",
    text:
      "Для друзей, небольших корпоративных команд и компаний, которым нужен готовый активный день с организацией."
  }
];

const whyUs = [
  "Малые группы до 8-10 человек вместо массовых выездов",
  "Два человека в команде: организация, маршрут и сопровождение",
  "Свои электровелосипеды, а не случайная аренда под каждую поездку",
  "Живая Telegram-группа как точка общения и анонсов",
  "Маршруты под туристический формат, а не под спортивную гонку",
  "Понятный вход для новичков, пар, друзей и мини-групп"
];

const safetyPoints = [
  "Перед каждым выездом мы проверяем маршрут, технику и погодные условия.",
  "Перед стартом участники проходят краткий инструктаж по формату поездки и правилам движения в группе.",
  "Маршрут и темп подбираются под уровень группы, а при необходимости могут быть скорректированы.",
  "При небезопасных погодных условиях выезд переносится или меняется на более подходящий формат.",
  "Организатор вправе не допустить участника до старта при явных обстоятельствах, мешающих безопасному участию."
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
          <a href="#safety">Безопасность</a>
          <a href="#prices">Цены</a>
          <a href="#booking">Запись</a>
          <a href="/contacts">Контакты</a>
          <a href="/rules">Правила</a>
          <a href="/insurance">Страховка</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__content">
          <p className="eyebrow">VeloturYug.ru</p>
          <h1>Однодневные e-bike туры по югу России</h1>
          <p className="hero__lead">
            Организованные однодневные e-bike выезды по Краснодару,
            Краснодарскому краю и Адыгее с красивыми маршрутами, продуманной
            логистикой и малой группой до 10 человек.
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

      <section className="section section--promo">
        <div className="promo-banner">
          <div>
            <p className="eyebrow">Рекламная фишка</p>
            <h2>Парк Краснодар утром как легкий вход в проект</h2>
            <p className="section__text">
              Это не просто еще один маршрут, а удобный формат для рекламы:
              короткая красивая поездка, понятный вход для новичков, живые фото,
              кофе после выезда и мягкое знакомство с вашей командой.
            </p>
          </div>
          <div className="promo-banner__aside">
            <span>10-18 км</span>
            <span>Легкий темп</span>
            <span>Хорош для промо и первых заявок</span>
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
          <h2>Маршруты разбиты так, чтобы клиенту было легко выбрать свой формат</h2>
          <p className="section__text">
            Мы не складываем все маршруты в один список. Так проще показать, с
            чего начать новичкам, что является основной линейкой, а что относится
            к premium или будущим выездам.
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

      <section className="section" id="safety">
        <div className="section__heading">
          <p className="eyebrow">Безопасность</p>
          <h2>Маршрут, темп и организация подстраиваются под реальную безопасность группы</h2>
          <p className="section__text">
            Мы не обещаем невозможного и не подаем выезды как экстремальный
            формат. На старте важны понятные правила, спокойный темп, проверка
            условий и аккуратная организация.
          </p>
        </div>
        <div className="why-grid">
          {safetyPoints.map((item) => (
            <article className="why-card" key={item}>
              <span className="trust-item__mark" />
              <p>{item}</p>
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

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Почему именно с нами</p>
          <h2>Сильные стороны проекта, которые реально важны клиенту</h2>
          <p className="section__text">
            Этот формат опирается не на абстрактные обещания, а на понятную
            организацию, сопровождение и живую подачу маршрутов.
          </p>
        </div>
        <div className="why-grid">
          {whyUs.map((item) => (
            <article className="why-card" key={item}>
              <span className="trust-item__mark" />
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="community-card">
          <div>
            <p className="eyebrow">Сообщество</p>
            <h2>У проекта уже есть живая точка контакта в Telegram</h2>
            <p className="section__text">
              Группа <strong>«Походы Краснодар»</strong> помогает собирать людей,
              показывать анонсы выездов, знакомить аудиторию с маршрутам и
              создавать вокруг проекта настоящее сообщество, а не просто страницу
              с кнопкой записи.
            </p>
          </div>
          <a className="community-card__link" href="https://t.me/pohod_Krasnodar">
            Перейти в Telegram-группу
          </a>
        </div>
      </section>

      <section className="section">
        <div className="mood-grid">
          <article className="mood-card mood-card--sea">
            <p className="eyebrow">Атмосфера маршрутов</p>
            <h3>Море, набережные и ветер с побережья</h3>
            <p>
              Для направлений вроде Геленджика, Кабардинки, Сукко и Утриша, где
              эмоция маршрута ощущается уже по самому названию.
            </p>
          </article>
          <article className="mood-card mood-card--forest">
            <p className="eyebrow">Атмосфера маршрутов</p>
            <h3>Лес, предгорья и мягкий рельеф</h3>
            <p>
              Для Адыгеи и Горячего Ключа, когда хочется не города, а ощущения,
              что за один день ты действительно выбрался в природу.
            </p>
          </article>
          <article className="mood-card mood-card--city">
            <p className="eyebrow">Формат для промо</p>
            <h3>Парк Краснодар утром</h3>
            <p>
              Спокойный городской выезд, который легко продвигать, показывать в
              рекламе и использовать как знакомство с форматом проекта.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--split">
        <div className="schedule-card">
          <p className="eyebrow">Ближайшие выезды</p>
          <h2>Даже без полного расписания можно показать, что проект уже живой</h2>
          <div className="schedule-list">
            {upcomingRides.map((ride) => (
              <article className="schedule-item" key={ride.title}>
                <div>
                  <h3>{ride.title}</h3>
                  <p>{ride.note}</p>
                </div>
                <span>{ride.status}</span>
              </article>
            ))}
          </div>
        </div>
        <div className="stack-card">
          <article className="mini-card">
            <p className="mini-card__label">Как записаться</p>
            <ul className="plain-list">
              {bookingSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section section--split">
        <div className="ebike-panel">
          <p className="eyebrow">Почему именно e-bike</p>
          <h2>Электровелосипед снимает барьер входа и делает тур гораздо комфортнее</h2>
          <p className="section__text">
            Для коммерческого тура это один из главных плюсов формата. Человек
            не должен быть спортсменом, чтобы поехать на красивый маршрут и
            получить удовольствие от дня на природе.
          </p>
        </div>
        <div className="ebike-list">
          {ebikeReasons.map((reason) => (
            <article className="ebike-item" key={reason}>
              <span className="trust-item__mark" />
              <p>{reason}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__heading">
          <p className="eyebrow">Для кого это</p>
          <h2>Мы продаем формат, который подходит не одной узкой аудитории</h2>
          <p className="section__text">
            Однодневные e-bike туры можно упаковывать по-разному, и это делает
            проект сильнее как бизнес, а не только как хобби.
          </p>
        </div>
        <div className="audience-grid">
          {audiences.map((audience) => (
            <article className="audience-card" key={audience.title}>
              <h3>{audience.title}</h3>
              <p>{audience.text}</p>
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

      <section className="section section--split">
        <div className="checklist-card">
          <p className="eyebrow">Уровни маршрутов</p>
          <h2>Понятная разбивка, чтобы человеку было не страшно записаться</h2>
          <div className="level-list">
            {routeLevels.map((level) => (
              <article className="level-item" key={level.title}>
                <h3>{level.title}</h3>
                <p>{level.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="checklist-card checklist-card--soft">
          <p className="eyebrow">Что взять с собой</p>
          <h2>Простой список, который делает сайт практичным</h2>
          <ul className="checklist">
            {packingList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
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
            <a className="button button--ghost-light" href="/contacts">
              Контакты и запись
            </a>
            <a className="button button--ghost-light" href="/rules">
              Правила участия
            </a>
            <a className="button button--ghost-light" href="/insurance">
              Страховка и переносы
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
