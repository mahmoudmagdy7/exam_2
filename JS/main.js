// importing all pages
import Home from "./pages/Home.js";
import Meal from "./pages/Meal-details.js";
import Contact from "./pages/Contact.js";
import Ingredients from "./pages/Ingredients.js";
import Area from "./pages/Area.js";
import Category from "./pages/Category.js";
import Search from "./pages/Search.js";


//loading spinner
$('.loading').fadeIn()
$(window).on('load', function () {
  $('.loading').fadeOut()
})



// navigator
$('.toggler-layer').click(function () {
  $(this).toggleClass('active');
  if ($(this).hasClass('active')) {
    $('#closeNav').addClass('d-none')
    $('#openNav').removeClass('d-none')
    $('nav').css('left', -$('.left-side').outerWidth())
    $('nav ul').css('top', '100%')
    $('nav ul li').css('top', '100px')
  } else {
    $('nav ul li').css('top', '0')
    $('nav ul').css('top', '0')
    $('nav').css('left', '0')
    $('#openNav').addClass('d-none')
    $('#closeNav').removeClass('d-none')
  }
})
$(document).on("click", function (e) {
  if (!$(e.target).hasClass('toggler-layer')) {
    $('.toggler-layer').addClass('active');
    $('#closeNav').addClass('d-none')
    $('#openNav').removeClass('d-none')
    $('nav').css('left', -$('.left-side').outerWidth())
    $('nav ul').css('top', '100%')
    $('nav ul li').css('top', '100px')

  }
});


// back home


// call home page 
let homePage = new Home;
homePage.gettingData()

// call specific meal
let mealDetails = new Meal;
mealDetails.getMealId()

// call search form
let search = new Search;
search.displaySearchForm()

// call specific category
let category = new Category;
category.getCategory()
category.gettingData()

// call specific area
let area = new Area;
area.getArea()
area.gettingData()

// call specific meal
let ingredients = new Ingredients;
ingredients.getIngredients()
ingredients.gettingData()

// call specific meal
let contactUs = new Contact;
contactUs.displayContactForm()

$('.back-home').click(async function () {
  await homePage.gettingData()
  $(this).addClass('d-none')
}
)