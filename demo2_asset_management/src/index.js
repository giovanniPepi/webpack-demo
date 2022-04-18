import _ from 'lodash';
import './style.css';
import Icon from './image.svg'; 
import Data from './data.xml';
import Notes from './data.csv';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Test', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  console.log(Data);
  console.log(Notes);
  
  return element;
}

document.body.appendChild(component());

