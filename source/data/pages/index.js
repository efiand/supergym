import html from '../../js/utils/html.js';

const addTariffLink = (tariff) =>
  Object.assign(tariff, {
    link: {
      title: 'Купить абонемент',
      url: '#!',
    },
  });

export default ({getImages}) => {
  const trainersList = [
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Анна Павлова',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Алексей Лавров',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Александр Пашков',
    },
    {
      content: html`<ul>
        <li>Certified Level 3 Trainer</li>
        <li>Победитель чемпионата России по CrossFit</li>
        <li>Опыт — 6 лет</li>
      </ul>`,
      description: 'CrossFit',
      heading: 'Мария Кетова',
    },
  ].map((trainer, i) =>
    Object.assign(trainer, {
      image: getImages(`trainer-${i + 1}`, {alt: `Тренер ${trainer.heading}.`}, false, false),
    })
  );
  trainersList.push(trainersList[3], trainersList[2], trainersList[1], trainersList[0]);

  return {
    about: {
      content: html`<h2>Тренажерный зал</h2>
        <p>Просторный зал площадью 900 кв/м</p>
        <p>
          Supergym – самый большой фитнес центр за Уралом и идеальное место для укрепления тела и здоровья. Тренажерный
          зал оснащен всем необходимым современным оборудованием для всех спортсменов.
        </p>
        <p>
          В зале расположены отдельная зона для Crossfit и кардио-зона с 40 тренажерами. Также в фитнес центре есть
          несколько оборудованных залов для различных видов групповых занятий.
        </p> `,
      image: getImages('about', {alt: 'Каким выглядит один из наших залов.'}),
      video: {
        file: 'blank',
        poster: getImages('about-video', {}, false, true),
      },
    },
    advantages: {
      heading: 'Наши преимущества',
      list: [
        {
          content: html`<p>Современные тренажеры на все группы мышц</p>`,
          key: 'Тренажеров',
          lead: true,
          value: '100',
        },
        {
          content: html`<h2>Площадь</h2>
            <p>Занимайтесь без очередей и толпучки</p>`,
          key: 'кв/м',
          value: '900',
        },
        {
          content: html`<h2>Собственная парковка</h2>
            <p>Вы всегда найдете место для своей машины на нашей парковке</p>`,
          key: 'машин',
          value: '70',
        },
        {
          content: html`<h2>Комфорт</h2>
            <p>Просторные раздевалки, душевые, фен, Wi-Fi, кулеры</p>`,
          key: 'мест',
          value: '350',
        },
        {
          content: html`<h2>Тренерский опыт</h2>
            <p>Добивайтесь своих целей быстрее с профессиональным тренером</p>`,
          key: 'лет',
          value: '5+',
        },
      ],
    },
    event: {
      description: html`<p>Ежегодные соревнования по CrossFit</p>`,
      heading: 'Super Games',
      datetime: {
        day: 7,
        month: 'Марта',
        date: '2019-03-07',
        time: '12:00',
        year: 2019,
      },
      image: getImages('supergames', {alt: 'Пловец кролем в брызгах воды.'}, false, false),
      link: {
        title: 'Заполнить заявку',
        url: '#!',
      },
    },
    promo: addTariffLink({
      features: ['Тренажёрный зал', 'Групповые занятия', 'Кардио-зона'],
      label: 'Омск',
      image: getImages('promo', {alt: 'Каким Вы можете стать благодаря нам.'}, false, false),
      title: 'Фитнес центр',
    }),
    subscriptions: {
      decor: getImages('wheels', {}, false, false),
      heading: 'Абонементы',
      groups: [
        {
          list: [
            {
              description: '12 занятий',
              heading: 'С тренером',
              price: 5000,
            },
            {
              description: 'с 8:00 до 17:00 ',
              heading: 'Дневной',
              price: 1700,
            },
            {
              description: 'с 8:00 до 22:00 ',
              heading: 'Полный день',
              price: 2700,
            },
          ].map(addTariffLink),
          title: '1 месяц',
        },
        {
          list: [
            {
              description: 'с 8:00 до 17:00 ',
              heading: 'Дневной',
              price: 1700,
            },
            {
              description: '12 занятий',
              heading: 'С тренером',
              price: 5000,
            },
            {
              description: 'с 8:00 до 22:00 ',
              heading: 'Полный день',
              price: 2700,
            },
          ].map(addTariffLink),
          title: '6 месяцев',
        },
        {
          list: [
            {
              description: '12 занятий',
              heading: 'С тренером',
              price: 5000,
            },
            {
              description: 'с 8:00 до 22:00 ',
              heading: 'Полный день',
              price: 2700,
            },
            {
              description: 'с 8:00 до 17:00 ',
              heading: 'Дневной',
              price: 1700,
            },
          ].map(addTariffLink),
          title: '12 месяцев',
        },
      ],
    },
    trainers: {
      heading: 'Тренеры',
      list: trainersList,
    },
  };
};
