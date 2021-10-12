const fetchData = async () => {
  const listContaier = document.getElementById('list');
  const getData = await fetch('https://themealdb.com/api/json/v1/1/filter.php?c=Seafood')
  .then((res) => res.json())
  .then((data) => {
    return data.meals
  });
  // Create The List
  console.log(getData[0]);
  getData.map((item) => {
    return listContaier.innerHTML += `
      <li class="item">
        <div class="item-img">
          <img src="${item.strMealThumb}" alt="${item.strMeal}"/>
        </div>

        <div class="body">
          <h3 class="meal-name">${item.strMeal}</h3>
          <div class="likes-container">
            <i class="fas fa-heart"></i>
            <span>5 Likes</span>
          </div>
        </div>

        <div class="footer">
          <button class="btn" id="comments-btn">Comments</button>
          <button class="btn" id="reservation-btn">Reservations</button>
        </div>
      </li>
    `
  })
}

export default fetchData;