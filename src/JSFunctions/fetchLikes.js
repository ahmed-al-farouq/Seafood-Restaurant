const fetchLikes = async (isItPost) => {
  if (isItPost) {
    const getLikes = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/likes')
      .then((res) => res.json())
      .then((likes) => {
        const likesNumber = document.querySelectorAll('.likes-number');
        return likesNumber.forEach((item) => {
          item.innerHTML = `${likes[0].likes + 1}`;
          item.innerHTML += ' Likes';
          return likesNumber;
        });
      });
    return getLikes;
  }
  const getLikes = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/likes')
    .then((res) => res.json())
    .then((likes) => {
      const likesNumber = document.querySelectorAll('.likes-number');
      return likesNumber.forEach((item) => {
        item.innerHTML = `${likes[0].likes}`;
        item.innerHTML += ' Likes';
        return likesNumber;
      });
    });
  return getLikes;
};

export default fetchLikes;