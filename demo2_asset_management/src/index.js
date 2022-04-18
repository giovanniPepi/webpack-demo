import _ from 'lodash';
import './style.css';
import Icon from './image.svg'; 

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hellooooooooooooooo', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  return element;
}

document.body.appendChild(component());

