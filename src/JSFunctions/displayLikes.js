const displayLikes = (id, isItPost) => {
  const likeSpan = document.querySelector(`.item-${id}`);
  const likeObjs = JSON.parse(localStorage.getItem('likes'));
  let likes = 0;
  for (let i = 0; i < likeObjs.length; i += 1) {
    if (likeObjs[i].item_id === id && isItPost) {
      likes = likeObjs[i].likes;
      likeObjs[i].likes += 1;
      localStorage.setItem('likes', JSON.stringify(likeObjs));
      likeSpan.textContent = `${likes + 1} likes`;
      break;
    } else if (likeObjs[i].item_id === id && !isItPost) {
      likes = likeObjs[i].likes;
      likeSpan.textContent = `${likes} likes`;
      break;
    }
  }
  return likes;
};

export default displayLikes;