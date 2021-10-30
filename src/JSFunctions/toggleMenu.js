const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
  menuIcon.style.opacity = '0';
  if (menuIcon.firstChild.innerHTML === '×') {
    menuIcon.innerHTML = `
    <i class="fas fa-bars"></i>
    `;
    setTimeout(() => {
      menuIcon.style.opacity = '1';
    }, 240);
    nav.style.height = '0';
  } else {
    setTimeout(() => {
      menuIcon.innerHTML = '<span class="close-icon">&times;</span>';
      menuIcon.style.opacity = '1';
    }, 240);
    nav.style.height = '175px';
  }
});
