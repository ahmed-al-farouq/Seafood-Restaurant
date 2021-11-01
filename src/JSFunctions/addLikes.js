import displayLikes from './displayLikes.js';
import postLikes from './postLikes.js';

const addLikes = () => {
  const likeIcons = document.querySelectorAll('.like-icon');
  likeIcons.forEach((likeIcon) => likeIcon.addEventListener('click', () => {
    postLikes(likeIcon.id);
    return displayLikes(likeIcon.id, true);
  }));
};

export default addLikes;