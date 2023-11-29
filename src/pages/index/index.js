import './index.scss';

function slider(activeSlide) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlide].classList.add('active');

  for (const slide of slides) {
    slide.addEventListener('click', () => {
      removeClass();
      slide.classList.add('active');
    });
  }

  function removeClass() {
    slides.forEach((slide) => {
      slide.classList.remove('active');
    });
  }
}

slider(3);

console.log('Первая страница приложения');
