export default (containerElement) => {
  const videoElement = containerElement.querySelector('[data-player]');
  const controlElement = containerElement.querySelector('[data-control]');

  controlElement.addEventListener('click', () => {
    containerElement.classList.add('is-active');
    videoElement.setAttribute('controls', '');
    videoElement.play();
  });

  const deactivate = () => {
    containerElement.classList.remove('is-active');
    videoElement.removeAttribute('controls');
  };
  videoElement.addEventListener('ended', () => deactivate());
  deactivate(); // Инициализация Js-логики
};
