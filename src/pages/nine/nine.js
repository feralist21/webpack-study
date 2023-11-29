import img1 from '../assets/pexels-christian-heitz-842711.jpg';
import img2 from '../assets/pexels-irina-iriser-1379636.jpg';

const addImg = () => {
  const wrapper = document.createElement('div');

  wrapper.classList.add('wrapper');

  const imgOne = document.createElement('img');
  imgOne.src = img1;

  const imgTwo = document.createElement('img');
  imgTwo.src = img2;

  const arr = [imgOne, imgTwo];

  arr.forEach((i) => wrapper.appendChild(i));

  document.body.append(wrapper);
};

addImg();
