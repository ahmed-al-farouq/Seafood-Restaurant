const displayLikes = (id, isItPost) => {
  const likeSpan = document.querySelector(`.item-${id}`);
  const likeObjs = JSON.parse(localStorage.getItem('likes'));
  let likes = 0;
  let itemId;
  for (let i = 0; i < likeObjs.length; i += 1) {
    if (likeObjs[i].item_id === id && isItPost) {
      itemId = id;
      likes = likeObjs[i].likes;
      likeObjs[i].likes += 1;
      localStorage.setItem('likes', JSON.stringify(likeObjs));
      likeSpan.textContent = `${likes + 1} likes`;
      break;
    } else if (likeObjs[i].item_id === id && !isItPost) {
      itemId = id;
      likes = likeObjs[i].likes;
      likeSpan.textContent = `${likes} likes`;
    } else if (i === likeObjs.length - 1 && itemId === undefined) {
      likes = 1;
      likeSpan.textContent = `${likes} like`;
      break;
    }
  }
};

export default displayLikes;
