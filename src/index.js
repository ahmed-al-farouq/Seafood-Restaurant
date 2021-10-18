import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';
import fetchData from './JSFunctions/fetchData.js';
import './JSFunctions/toggleMenu.js';
import logo from './imgs/logo.png';

fetchData();
const logoDivs = document.querySelectorAll('.logo');
logoDivs.forEach((div) => {
  div.innerHTML = `<img src="${logo}" alt="logo"/>`;
});

// Navigate Pages
const home = document.getElementById('meals');
const homeSection = document.querySelector('.home-section');
const about = document.getElementById('about');
const aboutSection = document.getElementById('about-section');

home.addEventListener('click', (e) => {
  e.preventDefault();
  homeSection.style.display = 'flex';
  aboutSection.style.display = 'none';
  home.parentElement.classList.add('active');
  about.parentElement.classList.remove('active');
});

about.addEventListener('click', (e) => {
  e.preventDefault();
  homeSection.style.display = 'none';
  aboutSection.style.display = 'flex';
  home.parentElement.classList.remove('active');
  about.parentElement.classList.add('active');
});