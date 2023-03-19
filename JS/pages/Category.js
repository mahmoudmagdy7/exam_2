
export default class category {

  async gettingData() {
    let category = await (await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')).json()
    this.displayData(category)

  }
  displayData(category) {
    let content = ''
    for (let i = 0; i < category.categories.length; i++) {
      content +=
        `
      <div class='col-md-4  position-relative'>
      <div class="meal overflow-hidden position-relative rounded text-dark">
      <div id=${category.categories[i].strCategory}  class='helper-layer'></div>
      <img class='w-100'src=${category.categories[i].strCategoryThumb}>
        <div class="meal-layer text-center position-absolute bg-white bg-opacity-50 z-3">
          <h2 id="mealName" class="mt-3">${category.categories[i].strCategory}</h2>
          <p id="mealName">${category.categories[i].strCategoryDescription}</p>
        </div>
      </div>
    </div>

          `
    }
    $('#category').click(() => {
      $('#content').html(content);
    })
  }
  async displayCategory(id) {
    let category = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)).json()
    console.log(category);
    let content = ''
    for (const item of category.meals) {
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
  getCategory() {
    $(window).click((e) => {
      if ($(e.target).hasClass('helper-layer')) {
        this.displayCategory(e.target.id)
      }
    })
  }
}
