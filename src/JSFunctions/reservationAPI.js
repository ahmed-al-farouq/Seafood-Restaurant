import { countReservations } from '../components/reservationPopup.js';

const reservationsURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/reservations';
const createReservations = async (id, nameValue, startDate, endtDate) => {
  const response = await fetch(reservationsURL, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: nameValue,
      date_start: startDate,
      date_end: endtDate,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const reservationsData = await response.text();
  return reservationsData;
};

export const fetchReservationsFromApi = async (index, container) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/reservations?item_id=${index}`;
  const response = await fetch(URL);
  const reservationsData = await response.json();
  reservationsData.forEach((reservation) => {
    container.innerHTML += `
    <p>
      <span class="name"> ${reservation.username} </span>
      <span class="reservation-date">${reservation.date_start} / ${reservation.date_end} </span>
    </p>`;
  });
};

export const reservationsCounter = async (index, container) => {
  const URL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/WrdIYl3nn41qFAt1vMNj/reservations?item_id=${index}`;
  const response = await fetch(URL);
  const reservationsData = await response.json();
  const counter = countReservations(reservationsData);
  container.innerHTML = `
    <span>reservations (${counter === undefined ? 0 : counter})</span>`;
};
export default createReservations;
