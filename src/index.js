import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import fetchData from './JSFunctions/fetchData.js';
import logo from './imgs/logo.jpg';

fetchData();
const logoDivs = document.querySelectorAll('.logo');
logoDivs.forEach((div) => {
  div.innerHTML = `<img src="${logo}" alt="logo"/>`;
});