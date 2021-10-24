const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('.nav');

menuIcon.addEventListener('click', () => {
  menuIcon.style.opacity = '0';
  if (menuIcon.innerHTML === '×') {
    menuIcon.innerHTML = `
    <span></span>
    <span></span>
    <span></span>
    `;
    setTimeout(() => {
      menuIcon.style.opacity = '1';
    }, 240);
    nav.style.height = '0';
  } else {
    setTimeout(() => {
      menuIcon.innerHTML = '&times;';
      menuIcon.style.opacity = '1';
    }, 240);
    nav.style.height = '175px';
  }
});