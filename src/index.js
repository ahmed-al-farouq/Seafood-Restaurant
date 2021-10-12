import './main.css';
import commentPopup from './components/popup.js';
import '@fortawesome/fontawesome-free/css/all.css';

const createHTML = () => {
  document.body.innerHTML = commentPopup();
};

createHTML();
commentPopup();