import html from '../../js/utils/html.js';

export default ({getImages}) => ({
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
  promo: {
    features: ['Тренажёрный зал', 'Групповые занятия', 'Кардио-зона'],
    label: 'Омск',
    link: {
      title: 'Купить абонемент',
      utl: '#!',
    },
    image: getImages('promo', {alt: 'Каким Вы можете стать благодаря нам.'}, false, false),
    title: 'Фитнес центр',
  },
});