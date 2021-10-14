import createComments, { commentsCounter, fetchFromApi } from '../JSFunctions/commentsapi.js';

export const showComments = (id) => {
  const submitButton = document.querySelector('.comment-btn');
  const commentContainer = document.querySelector('.comment-container');
  const header = document.querySelector('.comments-header h3');
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const comments = document.getElementById('comments');
    if (name.value === '' || comments.value === '') return;
    await createComments(id, name.value, comments.value);
    const message = document.querySelector('.message');
    message.innerHTML = 'Your comment was added';
    message.style.padding = '0.5rem';
    name.value = '';
    comments.value = '';
    commentContainer.innerHTML = '';
    commentsCounter(id, header);
    fetchFromApi(id, commentContainer);
  });
};

export const commentPopup = (array, buttonIndex) => {
  let i;
  array.forEach((meal, arrayIndex) => {
    if (buttonIndex === arrayIndex) {
      i = arrayIndex;
      return i;
    }
    return false;
  });
  const article = document.createElement('article');
  const popup = `
    <div class="image-container">
      <i class="fas fa-times closing-icon"></i>
      <div class="image-placeholder">
        <img src="${array[i].strMealThumb}" alt="${array[i].strMeal}">
      </div>
    </div>
    <h2 class="seafood-name">${array[i].strMeal}</h2>
    <div class="comments-header">
      <h3>Comments (2)</h3>
      <div class="comment-container">
      </div>
    </div>
    <form class="comments-form" action="#">
      <h2>Add a comment</h2>
      <div class="form-container">
        <div>
          <label for="name"></label>
          <input type="text" id="name" name="name" placeholder="Your Name">
        </div>
        <div>
          <label for="comment"></label>
          <textarea id="comments" name="comments" rows="5" cols="40" placeholder="Your comments"></textarea>
        </div>
        <button type="submit" class="comment-btn">Comment</button>
        <p class="message"></p>
      </div>
  `;
  article.innerHTML = popup;
  return article;
};

export const countComments = (array) => array.length;