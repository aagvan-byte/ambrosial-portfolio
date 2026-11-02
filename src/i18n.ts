// Все тексты сайта на двух языках. Правки текста — только здесь.

export type Lang = 'ru' | 'en';

export const TELEGRAM = 'https://t.me/ambrosiall';
export const TELEGRAM_HANDLE = '@ambrosiall';

const ru = {
  meta: {
    title: 'Ambrosial — сайты и Telegram-боты для бизнеса',
    description: 'Лендинги, сайты компаний и Telegram-боты для малого бизнеса: от идеи до запуска. Пишите в Telegram @ambrosiall.',
  },
  nav: { services: 'Услуги', work: 'Работы', process: 'Как работаю', about: 'Обо мне', contact: 'Написать' },
  hero: {
    eyebrow: 'Фриланс-разработчик',
    title: 'Делаю сайты и Telegram-ботов, которые приносят заявки',
    lead: 'Лендинги, сайты компаний и боты для малого бизнеса — от идеи до запуска. Быстро, аккуратно и с понятным результатом.',
    cta: 'Написать в Telegram',
    secondary: 'Смотреть работы',
  },
  services: {
    title: 'Чем могу помочь',
    items: [
      { title: 'Лендинги', text: 'Одностраничный сайт под рекламу, продукт или запись. Продуманная структура, быстрая загрузка, отлично выглядит на телефоне.' },
      { title: 'Сайты компаний', text: 'Несколько страниц: услуги, работы, цены, контакты. Тексты и цены легко обновлять.' },
      { title: 'Telegram-боты', text: 'Запись клиентов, приём заявок, напоминания. Работают круглосуточно без вашего участия.' },
      { title: 'Заявки в Telegram', text: 'Подключу форму вашего сайта так, чтобы каждая заявка сразу приходила вам в мессенджер.' },
    ],
  },
  work: {
    title: 'Работы',
    lead: 'Демо-проекты для вымышленных компаний — каждый работает и открыт для проверки.',
    demo: 'Демо',
    site: 'Открыть сайт',
    bot: 'Открыть бота',
    code: 'Код на GitHub',
    projects: {
      zerno: {
        title: 'Лендинг кофейни «Зерно»',
        text: 'Продающая страница с меню, отзывами и бронированием стола. Фото оптимизированы — страница быстро открывается даже с мобильного интернета.',
        tags: ['Astro', 'Tailwind CSS', 'Адаптивная вёрстка'],
      },
      kvadrat: {
        title: 'Сайт ремонтной компании «Квадрат»',
        text: 'Пять страниц: услуги, работы, цены с FAQ, контакты. Заявки с формы мгновенно приходят владельцу в Telegram, спам-боты отсекаются.',
        tags: ['Astro', 'Серверная функция', 'Telegram Bot API'],
      },
      boroda: {
        title: 'Бот записи для барбершопа «Борода»',
        text: 'Клиент записывается в три нажатия, занятое время видно, но недоступно. Напоминание накануне, уведомления владельцу, работа 24/7.',
        tags: ['Python', 'aiogram', 'PostgreSQL', 'Vercel'],
      },
    },
    chat: {
      bot: 'Барбершоп «Борода»',
      service: 'Мужская стрижка, чт, 5 ноября',
      pick: 'Выберите время (неактивное — уже занято):',
      done: 'Готово, вы записаны!',
    },
  },
  process: {
    title: 'Как я работаю',
    steps: [
      { title: 'Обсуждаем задачу', text: 'Пара вопросов в Telegram: что нужно, для кого, примеры, которые нравятся.' },
      { title: 'Цена и сроки', text: 'Называю стоимость и срок до начала работы. Без сюрпризов в конце.' },
      { title: 'Разработка', text: 'Показываю промежуточный результат — вы видите, как движется проект.' },
      { title: 'Запуск', text: 'Публикую сайт или бота, проверяю на телефонах и компьютерах.' },
      { title: 'Поддержка', text: 'Помогаю с правками и доработками после запуска.' },
    ],
  },
  about: {
    title: 'Обо мне',
    text: [
      'Меня зовут Агван, работаю под именем Ambrosial. Делаю сайты и Telegram-ботов для малого бизнеса: кафе, салонов, мастеров, сервисных компаний.',
      'В работе использую современные AI-инструменты — это позволяет делать быстрее. А каждое решение проверяю сам: как сайт выглядит на телефоне, как быстро грузится, насколько надёжно защищены данные.',
    ],
    principles: [
      'Проект принадлежит вам: код на GitHub, доступы — у вас',
      'Ключи и данные клиентов не попадают в открытый доступ',
      'Проверяю результат на телефоне и компьютере перед сдачей',
    ],
  },
  contact: {
    title: 'Обсудим ваш проект?',
    text: 'Стоимость — по договорённости: зависит от задачи. Напишите в Telegram пару слов о проекте — отвечу, сколько это будет стоить и сколько займёт времени.',
    cta: 'Написать в Telegram',
  },
  footer: 'Сайты и Telegram-боты для бизнеса',
  switchTo: { label: 'EN', href: '/en/', aria: 'Switch to English' },
};

const en: typeof ru = {
  meta: {
    title: 'Ambrosial — websites and Telegram bots for business',
    description: 'Landing pages, business websites and Telegram bots for small businesses — from idea to launch. Message me on Telegram @ambrosiall.',
  },
  nav: { services: 'Services', work: 'Work', process: 'Process', about: 'About', contact: 'Contact' },
  hero: {
    eyebrow: 'Freelance developer',
    title: 'I build websites and Telegram bots that bring you leads',
    lead: 'Landing pages, business websites and bots for small businesses — from idea to launch. Fast, careful and with a clear result.',
    cta: 'Message me on Telegram',
    secondary: 'See my work',
  },
  services: {
    title: 'What I can do for you',
    items: [
      { title: 'Landing pages', text: 'A single page for ads, a product or bookings. Clear structure, fast loading, looks great on phones.' },
      { title: 'Business websites', text: 'Several pages: services, portfolio, pricing, contacts. Texts and prices are easy to update.' },
      { title: 'Telegram bots', text: 'Client bookings, lead collection, reminders. They work around the clock without you.' },
      { title: 'Leads to Telegram', text: 'I connect your website form so every request lands in your messenger instantly.' },
    ],
  },
  work: {
    title: 'Work',
    lead: 'Demo projects for fictional companies — each one is live and open to inspect.',
    demo: 'Demo',
    site: 'Open website',
    bot: 'Open bot',
    code: 'Code on GitHub',
    projects: {
      zerno: {
        title: '“Zerno” coffee shop landing page',
        text: 'A sales page with a menu, reviews and table booking. Optimized images keep it fast even on mobile data.',
        tags: ['Astro', 'Tailwind CSS', 'Responsive layout'],
      },
      kvadrat: {
        title: '“Kvadrat” renovation company website',
        text: 'Five pages: services, portfolio, pricing with FAQ, contacts. Form requests reach the owner on Telegram instantly; spam bots are filtered out.',
        tags: ['Astro', 'Serverless function', 'Telegram Bot API'],
      },
      boroda: {
        title: '“Boroda” barbershop booking bot',
        text: 'Clients book in three taps; taken slots stay visible but disabled. Evening-before reminders, owner notifications, runs 24/7.',
        tags: ['Python', 'aiogram', 'PostgreSQL', 'Vercel'],
      },
    },
    chat: {
      bot: 'Boroda Barbershop',
      service: 'Men’s haircut, Thu, Nov 5',
      pick: 'Pick a time (greyed out — already taken):',
      done: 'Done, you’re booked!',
    },
  },
  process: {
    title: 'How I work',
    steps: [
      { title: 'We discuss the task', text: 'A few questions on Telegram: what you need, who it’s for, examples you like.' },
      { title: 'Price and timeline', text: 'I name the cost and deadline before starting. No surprises at the end.' },
      { title: 'Development', text: 'I share progress along the way, so you always see where the project is.' },
      { title: 'Launch', text: 'I publish the site or bot and test it on phones and desktops.' },
      { title: 'Support', text: 'I help with edits and improvements after launch.' },
    ],
  },
  about: {
    title: 'About me',
    text: [
      'My name is Agvan, and I work as Ambrosial. I build websites and Telegram bots for small businesses: cafés, salons, independent pros, service companies.',
      'I use modern AI tools in my work — it lets me move faster. And I check every result myself: how it looks on a phone, how fast it loads, how safely data is handled.',
    ],
    principles: [
      'You own the project: code on GitHub, all access is yours',
      'Keys and client data never end up in public',
      'Tested on phone and desktop before handover',
    ],
  },
  contact: {
    title: 'Let’s talk about your project',
    text: 'Pricing depends on the task. Send me a few words about your project on Telegram — I’ll tell you the cost and how long it will take.',
    cta: 'Message me on Telegram',
  },
  footer: 'Websites and Telegram bots for business',
  switchTo: { label: 'RU', href: '/', aria: 'Переключить на русский' },
};

export const t = { ru, en };
