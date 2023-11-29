import './four.scss';

console.log('Hello page #4');

const board = document.querySelector('#board');
const squares = 1806;
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
];

for (let i = 0; i < squares; i++) {
  const square = document.createElement('div');

  square.classList.add('square');

  square.addEventListener('mouseover', setColor);
  square.addEventListener('mouseleave', removeColor);
  board.append(square);
}

function setColor(evt) {
  const elem = evt.target;

  elem.style.backgroundColor = randomColor();
  elem.style.boxShadow = `0 0 2px ${randomColor()}, 0 0 10px ${randomColor()}`;
}

function removeColor(evt) {
  const elem = evt.target;

  elem.style.backgroundColor = '#1d1d1d1d';
  elem.style.boxShadow = '0 0 2px #000';
}

const randomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
