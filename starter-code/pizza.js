
var pepperoniBtn = $(".btn-pepperonni");
var mushroomBtn = $(".btn-mushrooms");
var greenPepperBtn = $(".btn-green-peppers");
var sauceBtn = $(".btn-sauce");
var crustBtn = $(".btn-crust");
var button = $(".btn");

var totalPrice = 13;
var totalPriceEl = $("#total-price");


function togglePepperoni () {
  $(".pep").toggle("pep");
  pepperoniBtn.toggleClass("active");
  $("li:contains('$1 pepperoni')").toggle(this);
}

function toggleMushrooms () {
  $(".mushroom").toggle("mushroom");
  mushroomBtn.toggleClass("active");
  $("li:contains('$1 mushrooms')").toggle(this);
}

function toggleGreenPeppers () {
  $(".green-pepper").toggle("green-pepper");
  greenPepperBtn.toggleClass("active");
  $("li:contains('$1 green peppers')").toggle(this);
}

function toggleWhiteSauce () {
  $(".sauce").toggleClass("sauce-white");
  sauceBtn.toggleClass("active");
  $("li:contains('$3 white sauce')").toggle(this);
}

function toggleGlutenFree () {
  $(".crust").toggleClass("crust-gluten-free");
  crustBtn.toggleClass("active");
  $("li:contains('$5 gluten-free crust')").toggle(this);
}



pepperoniBtn.click(function() {
  togglePepperoni();
  if(pepperoniBtn.hasClass("active")) {
    totalPrice += 1;
  }
  else {
    totalPrice -= 1;
  }
  totalPriceEl.html(totalPrice);
})

mushroomBtn.click(function () {
  toggleMushrooms();
  if(mushroomBtn.hasClass("active")) {
    totalPrice += 1;
  }
  else {
    totalPrice -= 1;
  }
  totalPriceEl.html(totalPrice);
});

greenPepperBtn.click(function () {
  toggleGreenPeppers();
  if(greenPepperBtn.hasClass("active")) {
    totalPrice += 1;
  }
  else {
    totalPrice -= 1;
  }
  totalPriceEl.html(totalPrice);
});

sauceBtn.click(function () {
  toggleWhiteSauce();
  if(sauceBtn.hasClass("active")) {
    totalPrice += 3;
  }
  else {
    totalPrice -= 3;
  }
  totalPriceEl.html(totalPrice);
});

crustBtn.click(function () {
  toggleGlutenFree();
  if(crustBtn.hasClass("active")) {
    totalPrice += 5;
  }
  else {
    totalPrice -= 5;
  }
  totalPriceEl.html(totalPrice);
})
