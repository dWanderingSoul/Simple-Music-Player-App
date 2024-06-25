const audioElement = document.getElementById('audio-player');
const playButton = document.getElementById('play-button');
const nextButton = document.getElementById('next-button');

playButton.addEventListener('click', () => {
  if (audioElement.paused) {
    audioElement.play();
    playButton.textContent = 'Pause';
  } else {
    audioElement.pause();
    playButton.textContent = 'Play';
  }
});

nextButton.addEventListener('click', () => {
  // Replace with logic to play next song in playlist (for simplicity, rewinds here)
  audioElement.currentTime = 0;
});
