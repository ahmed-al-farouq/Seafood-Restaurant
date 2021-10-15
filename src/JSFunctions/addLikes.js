import fetchLikes from './fetchLikes.js';
import postLikes from './postLikes.js';

const addLikes = () => {
  const likeIcons = document.querySelectorAll('.fa-heart');
  likeIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
      postLikes();
      return fetchLikes(true);
    });
  });
};

export default addLikes;