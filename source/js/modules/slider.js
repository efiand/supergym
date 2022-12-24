export default (sliderElement) => {
  const isMultiple = sliderElement.dataset.multiple !== 'undefined';

  const sliderOptions = {
    loop: true,
    navigation: {
      nextEl: sliderElement.querySelector('[data-next]'),
      prevEl: sliderElement.querySelector('[data-prev]'),
    },
    slideClass: 'slider__item',
    wrapperClass: 'slider__list',
  };

  if (isMultiple) {
    sliderOptions.breakpoints = {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1100: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    };
  }

  sliderElement.classList.remove('no-js');

  return new Swiper(sliderElement.querySelector('[data-slider-body]'), sliderOptions);
};
