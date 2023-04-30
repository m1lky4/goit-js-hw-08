import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

player.on('timeupdate', throttle((timeupdate) => {
        localStorage.setItem('videoplayerCurrentTime', JSON.stringify(timeupdate));;
}, 1000));
    
let savedTime = localStorage.getItem('videoplayerCurrentTime');
let parsedTime = savedTime ? JSON.parse(savedTime).seconds : 0;
player.setCurrentTime(parsedTime);
   