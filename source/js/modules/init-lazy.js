const scrolledToContent = (scrolledElement) => scrolledElement.scrollTop > window.innerHeight;

const scrollHandler = () => {
  if (!scrolledToContent()) {
    return;
  }

  initLazy();
};

function initLazy(callback, scrolledElement) {
  scrolledElement.removeEventListener('scroll', scrollHandler);
  scrolledElement.querySelectorAll('[data-lazy-style]').forEach((lazyStyledElement) => {
    lazyStyledElement.setAttribute('style', lazyStyledElement.dataset.lazyStyle);
    lazyStyledElement.removeAttribute('data-lazy-style');
  });

  callback();
}

export default (callback, scrolledElement = document.documentElement) => {
  // Загрузка скриптов второго и последующих экранов
  if (window.isDev || scrolledToContent(scrolledElement)) {
    initLazy(callback, scrolledElement);
  } else {
    scrolledElement.addEventListener('scroll', scrollHandler);
  }
};
