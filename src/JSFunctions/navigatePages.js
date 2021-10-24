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