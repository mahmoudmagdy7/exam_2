export default class Search {

  displaySearchForm() {
    $('#search').click(() => {
      let content =
        `
          <div class="search">
            <div class="row g-3 row-cols-md-2 row-cols-1">
              <div class='col'>
                <input class=" search-name form-control " type="text" placeholder="Search By Name" id="search-by-name">
              </div>
              <div class='col'>
                <input class="form-control " type="text" placeholder="Search By First Letter"  maxlength="1"  id="search-by-first-letter">
              </div>
            </div>
            <div class="row g-3 search-content text-center mt-4">
            </div>
          </div>
      `
      this.searchByName()
      this.searchByFirstLetter()
      $('#content').html(content);
    });
  }

  // search by name 
  searchByName() {
    // sure that the document loaded
    $(window).ready(function () {
      $('#search-by-name').keyup(async function (e) {
        // call the api once any letter has been added
        let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${this.value}`)).json()
        // display the meals
        let container = '';

        // check the returned values
        if (response.meals == null) {
          console.log(response);
          container =
            `
          <p class='bg-warning bg-opacity-10 text-warning rounded-1 fs-4 py-2'>no meals found</p>

          `
          $(".search-content").html(container)
        } else {
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
          $(".search-content").html(container)
        }
      });
    });
  }

  //search by first letter
  searchByFirstLetter() {
    // sure that the document loaded
    $(window).ready(function () {
      $('#search-by-first-letter').keyup(async function (e) {
        // call the api once any letter has been added
        // display the meals
        let container = '';

        // check the returned values
        if ($('#search-by-first-letter').val() != '') {
          let response = await (await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${this.value}`)).json()
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

          $(".search-content").html(container)

        } else {
          container =
            `
          <p class='bg-warning bg-opacity-10 text-warning rounded-1 fs-4 py-2'>Search input can not be empty!</p>
      
          `
          $(".search-content").html(container)
        }
      });
    });
  }
} 