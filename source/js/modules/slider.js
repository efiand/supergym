export default (sliderElement) => {
  const {loop, multiple} = sliderElement.dataset;
  const sliderBodyElement = sliderElement.querySelector('[data-slider-body]');

  const observeSlide = (entry) => {
    if (entry.isIntersecting) {
      entry.target.style.visibility = 'visible';
    } else {
      entry.target.style.visibility = 'hidden';
    }
  };

  const observer = new IntersectionObserver((entries) => entries.forEach(observeSlide), {
    root: sliderBodyElement,
  });

  const sliderOptions = {
    grabCursor: true,
    loop: typeof loop !== 'undefined',
    navigation: {
      nextEl: sliderElement.querySelector('[data-next]'),
      prevEl: sliderElement.querySelector('[data-prev]'),
    },
    slideClass: 'slider__item',
    wrapperClass: 'slider__list',
  };

  if (typeof multiple !== 'undefined') {
    sliderOptions.breakpoints = {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        allowTouchMove: false,
        grabCursor: false,
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1300: {
        allowTouchMove: false,
        grabCursor: false,
        slidesPerView: 4,
        spaceBetween: 40,
      },
    };
  }

  sliderElement.classList.remove('no-js');

  const swiper = new Swiper(sliderBodyElement, sliderOptions);

  sliderElement.querySelectorAll('[data-swiper-slide-index]').forEach((slideElement) => observer.observe(slideElement));

  return swiper;
};
