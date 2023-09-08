import loadScript from '../utils/load-script.js';

const CHECKING_INTERVAL = 100;
let scriptLoaded = false;
let playerIsReady = false;

export default (containerElement) => {
  const linkElement = containerElement.querySelector('[data-control]');
  const youtubeElement = containerElement.querySelector('[data-youtube]');
  let youtubePlayer = null;

  const createPlayer = () => {
    youtubePlayer = new YT.Player(youtubeElement, {
      events: {
        onStateChange(event) {
          if (event.data === 0) {
            containerElement.classList.remove('is-active');
          }
        },
      },
      videoId: youtubeElement.dataset.youtube,
    });

    // Делаем кнопку из ссылки
    const controlElement = document.createElement('button');
    controlElement.className = linkElement.className;
    controlElement.innerHTML = linkElement.innerHTML;
    const styles = linkElement.getAttribute('style');
    if (styles) {
      controlElement.setAttribute('style', styles);
    }

    let interval = null;
    const checkPlayer = () => {
      if (typeof youtubePlayer.playVideo === 'function') {
        clearInterval(interval);
        youtubePlayer.playVideo();
      }
    };
    controlElement.addEventListener('click', () => {
      containerElement.classList.add('is-active');
      interval = setInterval(checkPlayer, CHECKING_INTERVAL);
    });
    containerElement.replaceChild(controlElement, linkElement);
  };

  const initPlayer = () => {
    if (playerIsReady) {
      createPlayer();
      return;
    }
    window.onYouTubePlayerAPIReady = () => {
      createPlayer();
      playerIsReady = true;
    };
  };

  if (scriptLoaded) {
    initPlayer();
  } else {
    loadScript('https://www.youtube.com/player_api', initPlayer, () => (scriptLoaded = true));
  }
};
