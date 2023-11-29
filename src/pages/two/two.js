import './two.scss';

console.log('Hello page #2');

const dragdrop = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', drop);
}

dragdrop.addEventListener('dragstart', dragstart);
dragdrop.addEventListener('dragend', dragend);

const dragstart = (evt) => {
  evt.target.classList.add('hold');
  setTimeout(() => {
    evt.target.classList.add('hide');
  }, 0);
};

const dragend = (evt) => {
  evt.target.className = 'item';
};

function dragover(evt) {
  evt.preventDefault();
}

function dragenter(evt) {
  evt.target.classList.add('hovered');
}

function dragleave(evt) {
  evt.target.classList.remove('hovered');
}

function drop(evt) {
  evt.target.classList.remove('hovered');
  evt.target.append(dragdrop);
}
