
function togglePepperoni () {
  $(".pep").toggle("pep");
  $(".btn-pepperonni").toggleClass("active");
  $("li:contains('$1 pepperoni')").toggle("li:contains('$1 pepperoni')");
}

function toggleMushrooms () {
  $(".mushroom").toggle("mushroom");
  $(".btn-mushrooms").toggleClass("active");
  $("li:contains('$1 mushrooms')").toggle("li:contains('$1 mushrooms')");
}

function toggleGreenPeppers () {
  $(".green-pepper").toggle("green-pepper");
  $(".btn-green-peppers").toggleClass("active");
  $("li:contains('$1 green peppers')").toggle("li:contains('$1 green peppers')");
}

function toggleWhiteSauce () {
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").toggleClass("active");
  $("li:contains('$3 white sauce')").toggle("li:contains('$3 white sauce')");
}

function toggleGlutenFree () {
  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").toggleClass("active");
  $("li:contains('$5 gluten-free crust')").toggle("li:contains('$5 gluten-free crust')");
}

 $(".btn-pepperonni").click(togglePepperoni);
 $(".btn-mushrooms").click(toggleMushrooms);
 $(".btn-green-peppers").click(toggleGreenPeppers);
 $(".btn-sauce").click(toggleWhiteSauce);
 $(".btn-crust").click(toggleGlutenFree);

