
export default class Area {

  async gettingData() {
    let area = await (await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')).json()
    this.displayData(area)

  }
  displayData(area) {
    let content = ''
    for (let i = 0; i < 20; i++) {
      content +=
        `
        <div class="position-relative col-md-3 text-center">
        <div id=${area.meals[i].strArea}  class='area-layer'></div>
        <i class="fa-4x fa-solid fa-map-location-dot"></i>
        <h3>${area.meals[i].strArea}</h3>
      </div>

          `
    }
    $('#area').click(() => {
      $('#content').html(content);
      console.log('hiiii');
    })
  }
  async displayarea(id) {
    let area = await (await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${id}`)).json()
    let content = ''
    for (const item of area.meals) {
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
  getArea() {
    $(window).click((e) => {
      if ($(e.target).hasClass('area-layer')) {
        this.displayarea(e.target.id)
      }
    })
  }
}
