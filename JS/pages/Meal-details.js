export default class Meal {
  id = 1;
  getMealId() {
    $('body').click((e) => {
      if ($(e.target).hasClass('meal-layer')) {
        this.id = e.target.id;
        this.fetchApi()
      }
    });
  }
  // getting api response
  async fetchApi() {
    let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`)).json()
    this.displaySpecificMeal(response.meals[0])
  }

  displaySpecificMeal(response) {
    let ingredients = ``
    for (let i = 1; i <= 20; i++) {
      if (response[`strIngredient${i}`]) {
        ingredients += `<li class="recipe p-2 rounded-1">${response[`strMeasure${i}`]} ${response[`strIngredient${i}`]}</li>`
      }
    }

    let tags = response.strTags?.split(",")
    if (!tags) tags = []
    let tagsStr = ''
    for (let i = 0; i < tags.length; i++) {
      tagsStr += `
        <li class="recipe p-2 rounded-1">${tags[i]}</li>`
    }

    $('.back-home').removeClass('d-none')
    let mealDetails =
      `
    <div class="col-md-4 text-center">
      <img class='img-fluid' src=${response.strMealThumb}>
      <h2>${response.strMeal}</h2>
      </div>
    <div class="col-md-8">
    <h3>Instructions</h3>
      <p>${response.strInstructions}</p>
      <h3>Area : <span>${response.strArea}</span></h3>
      <h3>Category : <span>${response.strCategory}</span></h3>
      <h3 class="mb-3">Recipes</span></h3>
      <ul id="recipes" class="list-unstyled d-flex flex-wrap gap-2">
      ${ingredients}
      </ul>
      <h3 class="mb-3">Tags</span></h3>
      <ul id='tags' class="list-unstyled d-flex flex-wrap gap-2">
      ${tagsStr}
      </ul>
      <ul id='tags' class="list-unstyled d-flex flex-wrap gap-2">
      <li class="recipe p-2 rounded-1">
      <a class='text-decoration-none' target='_blank' href=${response.strSource} >Source</a>
      </li>
      <li class="recipe p-2 rounded-1">
     <a class='text-decoration-none' target='_blank' href=${response.strYoutube} >Youtube</a> 
     </li>
      </ul>
    </div>

    `

    $("#content").html(mealDetails)

  }


}