import './three.scss';

const start = document.querySelector('.start');
const screen = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const time = document.querySelector('#time');
const board = document.querySelector('.board');
let score = 0;
let times = 0;
const colors = [
  'yellow',
  'darkblue',
  'purple',
  'lime',
  'white',
  'gray',
  'gold',
  'pink',
  'Salmon',
  'DeepSkyBlue',
  'Teal',
  '#fff',
  'purple',
  'darkblue',
  'gold',
  'rgb(100,100,100, 0.4)',
];

start.addEventListener('click', (evt) => {
  evt.preventDefault();
  screen[0].classList.add('up');
});

timeList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('time-btn')) {
    times = parseInt(evt.target.getAttribute('data-time'));
    screen[1].classList.add('up');
    startGame();
  }
});

board.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('circle')) {
    score++;
    evt.target.remove();
    createRandom();
  }
});

const startGame = () => {
  setInterval(decTime, 1000);
  createRandom();
  setTime(times);
};

const decTime = () => {
  if (times === 0) {
    endGame();
  } else {
    let current = --times;

    if (current < 10) {
      current = `0${current}`;
    }

    setTime(current);
  }
};

const setTime = (value) => (time.innerHTML = `00:${value}`);

const endGame = () => {
  time.parentNode.classList.add('hide');
  board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
};

const createRandom = () => {
  const circle = document.createElement('div');
  const size = randomNum(10, 35);
  const {width, height} = board.getBoundingClientRect();
  const x = randomNum(0, width - size);
  const y = randomNum(0, height - size);

  circle.classList.add('circle');
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.backgroundColor = randomColor();
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;
  board.append(circle);
};

const randomNum = (min, max) => Math.round(Math.random() * (max - min) + min);

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

console.log('Третья страница приложения');
