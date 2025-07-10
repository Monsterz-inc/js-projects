const pads = document.querySelectorAll('.pad');

function playSound(key) {
  const audio = document.getElementById(key);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
    const pad = document.querySelector(`.pad[data-key="${key}"]`);
    pad.classList.add('active');
    setTimeout(() => pad.classList.remove('active'), 150);
  }
}

pads.forEach(pad => {
  pad.addEventListener('click', () => playSound(pad.dataset.key));
});

window.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});