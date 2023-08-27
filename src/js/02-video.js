// import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

const savedTime = localStorage.getItem(STORAGE_KEY);
function onPlay({ seconds }) {
  if (savedTime) {
    localStorage.setItem(STORAGE_KEY, seconds);
  }
}
player.setCurrentTime(savedTime);
