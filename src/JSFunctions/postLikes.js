const postLikes = async () => {
  const post = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/likes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: 'item1',
    }),
  }).then((res) => res);
  return post;
};

export default postLikes;