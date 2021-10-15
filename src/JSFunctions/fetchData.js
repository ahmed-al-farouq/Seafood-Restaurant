import { showComments, commentPopup } from '../components/popup.js';
import { commentsCounter, fetchFromApi } from './commentsapi.js';
import addLikes from './addLikes.js';
import itemsCount from './itemsCount.js';
import displayLikes from './displayLikes.js';
import fetchLikes from './fetchLikes.js';

const fetchData = async () => {
  const listContainer = document.getElementById('list');
  const getData = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then((res) => res.json())
    .then((data) => data.meals);
  // Create The List
  getData.map((item) => {
    itemsCount();
    listContainer.innerHTML += `
      <li class="item">
        <div class="item-img">
          <img src="${item.strMealThumb}" alt="${item.strMeal}"/>
        </div>

        <div class="body">
          <h3 class="meal-name">${item.strMeal}</h3>
          <div class="likes-container">
            <i class="fas fa-heart like-icon" id="${item.idMeal}"></i>
            <span class="item-${item.idMeal}"></span>
          </div>
        </div>

        <div class="footer">
          <button class="btn comments-btn">Comments</button>
        </div>
      </li>
    `;
    // Fetch Likes before displaying
    fetchLikes();
    // Display Likes By id
    return displayLikes(item.idMeal, false);
  });
  // Apply comments functions
  const commentButton = document.querySelectorAll('.comments-btn');
  commentButton.forEach((button, index) => {
    button.addEventListener('click', () => {
      const commentsDiv = document.querySelector('.comments-section');
      commentsDiv.innerHTML = commentPopup(getData, index).outerHTML;
      showComments(index);
      const commentContainer = document.querySelector('.comment-container');
      fetchFromApi(index, commentContainer);
      const header = document.querySelector('.comments-header h3');
      commentsCounter(index, header);
      const closingButton = document.querySelector('.closing-icon');
      closingButton.addEventListener('click', () => {
        commentsDiv.style.display = 'none';
      });
      commentsDiv.style.display = 'block';
    });
  });

  addLikes();
};
export default fetchData;