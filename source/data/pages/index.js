export default ({getImages}) => ({
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
