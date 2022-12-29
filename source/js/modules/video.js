import loadScript from '../utils/load-script.js';

let scriptLoaded = false;

export default (containerElement) => {
  const controlElement = containerElement.querySelector('[data-control]');
  const videoElement = containerElement.querySelector('[data-player]');
  const youtubeElement = containerElement.querySelector('[data-youtube]');
  let youtubePlayer = null;

  controlElement.addEventListener('click', () => {
    containerElement.classList.add('is-active');

    if (videoElement) {
      videoElement.setAttribute('controls', '');
      videoElement.play();
    } else {
      youtubePlayer.playVideo();
    }
  });

  const deactivate = () => {
    containerElement.classList.remove('is-active');

    if (videoElement) {
      videoElement.removeAttribute('controls');
    }
  };

  if (videoElement) {
    videoElement.addEventListener('ended', () => deactivate());
  } else if (youtubeElement) {
    const initPlayer = () => {
      window.onYouTubePlayerAPIReady = () => {
        youtubePlayer = new YT.Player(youtubeElement.id, {
          events: {
            onStateChange(event) {
              if (event.data === 0) {
                deactivate();
              }
            },
          },
          height: youtubeElement.clientHeight,
          width: youtubeElement.clientWidth,
          videoId: youtubeElement.id,
        });
      };
    };

    if (scriptLoaded) {
      initPlayer();
    } else {
      loadScript('https://www.youtube.com/player_api', initPlayer, () => (scriptLoaded = true));
    }
  }

  deactivate(); // Инициализация Js-логики
};
