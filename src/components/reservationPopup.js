import createReservations, { reservationsCounter, fetchReservationsFromApi } from '../JSFunctions/reservationAPI.js';

export const showReservations = (id) => {
  const submitButton = document.querySelector('.reservation-btn');
  const reservationsContainer = document.querySelector('.reservation-container');
  const header = document.querySelector('.reservations-header h3');
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name');
    const startDate = document.getElementById('start-date');
    const endDate = document.getElementById('end-date');
    if (name.value === '' || startDate.value === '') return;
    await createReservations(id, name.value, startDate.value, endDate.value);
    const message = document.querySelector('.message');
    message.innerHTML = 'Your reservation was added';
    message.style.padding = '0.5rem';
    name.value = '';
    startDate.value = '';
    endDate.value = '';
    reservationsContainer.innerHTML = '';
    reservationsCounter(id, header);
    fetchReservationsFromApi(id, reservationsContainer);
  });
};

export const reservationPopup = (array, buttonIndex) => {
  let i;
  array.forEach((meal, arrayIndex) => {
    if (buttonIndex === arrayIndex) {
      i = arrayIndex;
      return i;
    }
    return false;
  });
  const article = document.createElement('article');
  article.classList.add('reservation-article');
  const popup = `
    <div class="image-container">
      <i class="fas fa-times reservation-closing-icon"></i>
      <div class="image-placeholder">
        <img src="${array[i].strMealThumb}" alt="${array[i].strMeal}" class="meal-img">
      </div>
    </div>
    <h2 class="seafood-name">${array[i].strMeal}</h2>
    <div class="reservations-section-container">
      <form class="reservations-form" action="#">
        <h2>Add a reservation</h2>
        <div class="form-container">
          <div>
            <label for="name"></label>
            <input type="text" id="name" name="name" placeholder="Your Name">
          </div>
          <div>
            <label for="reservations"></label>
            <input type="date" id="start-date" name="start-date" placeholder="Start Date"/>
          </div>
          <div>
            <label for="reservations"></label>
            <input type="date" id="end-date" name="end-date" placeholder="End Date"/>
          </div>
          <button type="submit" class="reservation-btn">Reservation</button>
          <p class="message"></p>
        </div>
      </form>
      <div class="reservations-header">
        <h3></h3>
        <div class="reservation-container">
        </div>
      </div>
    </div>
  `;
  article.innerHTML = popup;
  return article;
};

export const countReservations = (array) => array.length;
