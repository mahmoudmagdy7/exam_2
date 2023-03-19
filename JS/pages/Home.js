// home component 
export default class Home {

  // getting data from api
  async gettingData() {
    let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`)).json();
    let container = '';
    for (const meal of response.meals) {
      container +=
        `
          <div class='col-md-4'>
          <div class="meal overflow-hidden position-relative rounded text-dark"> <img class='w-100' src=${meal.strMealThumb}>
            <div id=${meal.idMeal} class="meal-layer position-absolute d-flex justify-content-center align-items-center bg-white bg-opacity-50 z-3">
              <h2 id="mealName">${meal.strMeal}</h2>
            </div>
          </div>
        </div>
      `
    }
    $("#content").html(container)
  }
}

