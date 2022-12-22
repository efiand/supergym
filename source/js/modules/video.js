export default (containerElement) => {
  const videoElement = containerElement.querySelector('.video__player');
  const controlElement = containerElement.querySelector('.video__control');

  controlElement.addEventListener('click', () => {
    containerElement.classList.add('video--active');
    videoElement.setAttribute('controls', '');
    videoElement.play();
  });

  const deactivate = () => {
    containerElement.classList.remove('video--active');
    videoElement.removeAttribute('controls');
  };
  videoElement.addEventListener('ended', () => deactivate());
  deactivate(); // Инициализация Js-логики
};
