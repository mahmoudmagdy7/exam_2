
export default class Ingredients {

  async gettingData() {
    let ingredients = await (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')).json()
    this.displayData(ingredients)

  }
  displayData(ingredients) {
    let content = ''
    for (let i = 0; i < 20; i++) {
      content +=
        `
        <div class="ingredients position-relative col-md-3 text-center">
          <div id=${ingredients.meals[i].strIngredient} class='ingredients-layer'></div>
          <i class="fa-4x fa-solid fa-drumstick-bite"></i>
          <h3>${ingredients.meals[i].strIngredient}</h3>
          <p>${ingredients.meals[i].strDescription}</p>
        </div>
       `
    }
    $('#ingredients').click(() => {
      $('#content').html(content);
    })
  }
  async displayIngredients(id) {
    let ingredients = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)).json()
    let content = ''
    for (const item of ingredients.meals) {
      content +=
        `
        <div class='col-md-4'>
        <div class="meal overflow-hidden position-relative rounded text-dark"> <img class='w-100' src=${item.strMealThumb}>
          <div id=${item.idMeal} class="meal-layer position-absolute d-flex justify-content-center align-items-center bg-white bg-opacity-50 z-3">
            <h2 id="mealName">${item.strMeal}</h2>
          </div>
        </div>
      </div>
      `

    }
    $('#content').html(content);
  }
  getIngredients() {
    $(window).click((e) => {
      if ($(e.target).hasClass('ingredients-layer')) {
        this.displayIngredients(e.target.id)
      }
    })
  }
}
