import { countComments } from '../components/popup.js';

const commentsUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VJw9ODgbBtlmMkX50mSI/comments';
const createComments = async (id, nameValue, commentValue) => {
  const response = await fetch(commentsUrl, {
    method: 'POST',
    body: JSON.stringify({ item_id: id, username: nameValue, comment: commentValue }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const commentsData = await response.text();
  return commentsData;
};

export const fetchFromApi = async (index, container) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VJw9ODgbBtlmMkX50mSI/comments?item_id=${index}`;
  const response = await fetch(URL);
  const commentData = await response.json();
  commentData.forEach((object) => {
    container.innerHTML += `
    <div class="comments-div">
      <p class="person">${object.username}</p>
      <p class="comment-description">${object.comment}</p>
      <p class="date">${object.creation_date}</p>
    </div>`;
  });
};

export const commentsCounter = async (index, container) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VJw9ODgbBtlmMkX50mSI/comments?item_id=${index}`;
  const response = await fetch(URL);
  const commentData = await response.json();
  const counter = countComments(commentData);
  container.innerHTML = `
    <span>Comments(${counter === undefined ? 0 : counter})</span>`;
};
export default createComments;