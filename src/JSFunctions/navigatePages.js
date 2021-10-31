const home = document.getElementById('meals');
const homeSection = document.querySelector('.home-section');
const about = document.getElementById('about');
const aboutSection = document.getElementById('about-section');
const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

home.addEventListener('click', (e) => {
  e.preventDefault();
  if (window.innerWidth <= 991) {
    menuIcon.innerHTML = `
    <i class="fas fa-bars"></i>
    `;
    setTimeout(() => {
      menuIcon.style.opacity = '1';
    }, 200);
    nav.style.height = '0';
  }
  homeSection.style.display = 'flex';
  aboutSection.style.display = 'none';
  home.parentElement.classList.add('active');
  about.parentElement.classList.remove('active');
});

about.addEventListener('click', (e) => {
  e.preventDefault();
  if (window.innerWidth <= 991) {
    menuIcon.innerHTML = `
    <i class="fas fa-bars"></i>
    `;
    setTimeout(() => {
      menuIcon.style.opacity = '1';
    }, 200);
    nav.style.height = '0';
  }
  homeSection.style.display = 'none';
  aboutSection.style.display = 'flex';
  home.parentElement.classList.remove('active');
  about.parentElement.classList.add('active');
});
