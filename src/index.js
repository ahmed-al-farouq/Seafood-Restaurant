// import css and icons
import './main.css';
import '@fortawesome/fontawesome-free/css/all.css';
// import components
import header from './components/header.js';
import list from './components/list.js';
import footer from './components/footer.js';
// import functions
import fetchData from './JSFunctions/fetchData.js';

const createHTML = () => {
  document.body.innerHTML = header + list + footer;
  fetchData();
};

createHTML();