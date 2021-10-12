import './main.css';
import header from './components/header.js';
import footer from './components/footer.js';
import commentPopup from './components/popup.js';
import '@fortawesome/fontawesome-free/css/all.css';

const createHTML = () => {
  document.body.innerHTML = header + footer + commentPopup();
};

createHTML();
commentPopup();