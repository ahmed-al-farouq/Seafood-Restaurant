import './main.css';
import logo from './imgs/logo.jpg';

const createHTML = () => {
  const header = `
  <header>
    <nav>
      <div class="logo">
        <img src=${logo} alt="logo"/>
      </div>
      <ul>
        <li>
          <a href="#">
            Meals(6)
          </a>
        </li>
        <li>
          <a href="#">
            Reservation
          </a>
        </li>
        <li>
          <a href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  </header>
  `;
  const footer = `
    <footer>
      <div class="logo">
        <img src=${logo} alt="logo"/>
      </div>
      <div class="copyright-names">
        <small>&#169; 2021 <a href="#">Ahmed. Al-Farouq &</a><br><a href="#">Francis Ugorji.N.</a><br>Some Rights Reserved</small>
      </div>
    </footer>`;
  document.body.innerHTML = header + footer;
};

createHTML();
