import './main.css';
import header from './components/header.js';
import footer from './components/footer.js';

const createHTML = () => {
  document.body.innerHTML = header + footer;
};

createHTML();
