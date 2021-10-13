import commentPopup from '../components/popup.js';

const fetchData = async () => {
  const listContainer = document.getElementById('list');
  const getData = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((data) => data.meals);
  // Create The List
  getData.map((item) => {
    listContainer.innerHTML += `
      <li class="item">
        <div class="item-img">
          <img src="${item.strMealThumb}" alt="${item.strMeal}"/>
        </div>

        <div class="body">
          <h3 class="meal-name">${item.strMeal}</h3>
          <div class="likes-container">
            <i class="fas fa-heart"></i>
            <span>5 Likes</span>
          </div>
        </div>

        <div class="footer">
          <button class="btn comments-btn">Comments</button>
          <button class="btn reservation-btn">Reservations</button>
        </div>
      </li>
    `;
    return item;
  });
  const commentButton = document.querySelectorAll('.comments-btn');
  commentButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      const commentsDiv = document.querySelector('.comments-section');
      commentsDiv.innerHTML = commentPopup(getData, index);
      const closingButton = document.querySelector('.closing-icon');
      closingButton.addEventListener('click', () => {
        commentsDiv.style.display = 'none';
      });
      commentsDiv.style.display = 'block';
    });
  });
};

export default fetchData;