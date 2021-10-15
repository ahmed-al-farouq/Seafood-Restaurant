const fetchLikes = async () => {
  const getLikes = fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/likes')
    .then((res) => res.json())
    .then((likeObjs) => localStorage.setItem('likes', JSON.stringify(likeObjs)));
  return getLikes;
};

export default fetchLikes;