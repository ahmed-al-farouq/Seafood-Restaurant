import logo from '../imgs/logo.jpg';

const commentPopup = () => {
  const popup = `
  <article id="4">
    <div class="image-container">
      <div class="image-placeholder">
        <img src="${logo}" alt="">
      </div>
      <i class="fas fa-times closing-icon"></i>
    </div>
    <h2 class="seafood-name">Crab</h2>
    <div class="details-div">
      <div class="details-1">
        <p>Seafood</p>
        <p>Seafood</p>
      </div>
      <div class="details-2">
        <p>seafood</p>
        <p>seafood</p>
      </div>
    </div>
    <div class="comments-header">
      <h3>Comments (2)</h3>
      <div class="comment-container">
        <p>12/10/2019 Alex: I love it!</p>
        <p>12/10/2019 Alex: I love it!</p>
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
  </article>
  `;
  return popup;
};

export default commentPopup;