const heroImage = document.querySelector('.hero-image');
const motionButton = heroImage.querySelector('.hero-motion');
const motionIcon = motionButton.querySelector('span');

motionButton.addEventListener('click', () => {
  const shouldPause = heroImage.dataset.slideshow === 'playing';
  heroImage.dataset.slideshow = shouldPause ? 'paused' : 'playing';
  const label = shouldPause ? 'スライドを再開' : 'スライドを一時停止';
  motionIcon.textContent = shouldPause ? '▶' : 'Ⅱ';
  motionButton.setAttribute('aria-label', label);
  motionButton.title = label;
});

heroImage.dataset.slideshow = 'playing';
motionButton.hidden = false;
