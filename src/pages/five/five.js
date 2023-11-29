import './five.scss';

console.log('Hello page #5');

const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const mainCount = mainSlide.querySelectorAll('div').length;

const container = document.querySelector('.container');

let activeSlide = 0;

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'ArrowUp') {
    changeSlide('up');
  } else if (evt.key === 'ArrowDown') {
    changeSlide('down');
  }
});

sidebar.style.top = `-${(mainCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
  changeSlide('up');
});

downBtn.addEventListener('click', () => {
  changeSlide('down');
});

function changeSlide(direction) {
  if (direction === 'up') {
    activeSlide++;
    if (activeSlide === mainCount) {
      activeSlide = 0;
    }
  } else if (direction === 'down') {
    activeSlide--;
  }

  if (activeSlide < 0) {
    activeSlide = mainCount - 1;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlide * height}px)`;

  sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}
