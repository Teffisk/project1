//Display the number of orders in game
let displayTotalOrders = (document.querySelector(
  "#total-orders"
).textContent = totalOrders);
let displayChickenOrders = (document.querySelector(
  "#chicken-orders"
).textContent = chicken.orders);
let displaySteakOrders = (document.querySelector("#steak-orders").textContent =
  steak.orders);
let displayAvocadoOrders = (document.querySelector(
  "#avocado-orders"
).textContent = avocado.orders);

let gameScene = document.querySelector("#taco-truck-scene");
let displayAccount = (document.querySelector("#account").textContent = account);

//Display taco prices in game
// let displayChickenTacoPrice = (document.querySelector(
//   "#chicken-taco-price"
// ).textContent = chicken.price);
// let displaySteakTacoPrice = (document.querySelector(
//   "#steak-taco-price"
// ).textContent = steak.price);
// let displayAvocadoTacoPrice = (document.querySelector(
//   "#avocado-taco-price"
// ).textContent = avocado.price);

//Display inventory in game
let displayChickenInv = (document.querySelector("#chicken-inv").textContent =
  chicken.inv);
let displaySteakInv = (document.querySelector("#steak-inv").textContent =
  steak.inv);
let displayAvocadoInv = (document.querySelector("#avocado-inv").textContent =
  avocado.inv);
let displayTortillaInv = (document.querySelector("#tortilla-inv").textContent =
  tortillas.inv);
let displaySalsaInv = (document.querySelector("#salsa-inv").textContent =
  salsa.inv);

//Display Reputation which affects chance to buy
let displayReputation = (document.querySelector(
  "#reputation"
).textContent = reputation);
let displayPassersby = (document.querySelector(
  "#total-passersby"
).textContent = passersby);

//Show the cost per pound and servings per pound of each ingredient
let displayChickenCost = (document.querySelector("#chicken-cost").textContent =
  chicken.cost);
let displaySteakCost = (document.querySelector("#steak-cost").textContent =
  steak.cost);
let displayAvocadoCost = (document.querySelector("#avocado-cost").textContent =
  avocado.cost);
let displayTortillaCost = (document.querySelector(
  "#tortillas-cost"
).textContent = tortillas.cost);
let displaySalsaCost = (document.querySelector("#salsa-cost").textContent =
  salsa.cost);

//Show the serving per pound of each ingredient
var displayChickenQty = (document.querySelector("#chicken-qty").textContent =
  chicken.pack);
var displaySteakQty = (document.querySelector("#steak-qty").textContent =
  steak.pack);
var displayAvocadoQty = (document.querySelector("#avocado-qty").textContent =
  avocado.pack);
var displayTortillaQty = (document.querySelector("#tortilla-qty").textContent =
  tortillas.pack);
var displaySalsaQty = (document.querySelector("#salsa-qty").textContent =
  salsa.pack);

//On screen game displays
var displayOpenOrClosed = (document.querySelector(
  "#open-closed"
).textContent = openingCountdown);
var displayDayCounter = (document.querySelector(
  "#day-count"
).textContent = dayCounter);

// //Add event listeners to buttons
// let buyChickenButton = document
//   .querySelector("#buy-more-chicken-button")
//   .addEventListener("click", buyMore(chicken));
// let buySteakButton = document
//   .querySelector("#buy-more-steak-button")
//   .addEventListener("click", buyMore(steak));
// let buyAvocadoButton = document
//   .querySelector("#buy-more-avocado-button")
//   .addEventListener("click", buyMore(avocado));
// let buyTortillasButton = document
//   .querySelector("#buy-more-tortillas-button")
//   .addEventListener("click", buyMore(tortillas));
// let buySalsaButton = document
//   .querySelector("#buy-more-salsa-button")
//   .addEventListener("click", buyMore(salsa));

function enableButtons() {
  buyChickenButton = document
    .querySelector("#buy-more-chicken-button")
    .addEventListener("click", buyMoreChicken);
  buySteakButton = document
    .querySelector("#buy-more-steak-button")
    .addEventListener("click", buyMoreSteak);
  buyAvocadoButton = document
    .querySelector("#buy-more-avocado-button")
    .addEventListener("click", buyMoreAvocados);
  buyTortillasButton = document
    .querySelector("#buy-more-tortillas-button")
    .addEventListener("click", buyMoreTortillas);
  buySalsaButton = document
    .querySelector("#buy-more-salsa-button")
    .addEventListener("click", buyMoreSalsa);
}

function disableButtons() {
  buyChickenButton = document
    .querySelector("#buy-more-chicken-button")
    .removeEventListener("click", buyMoreChicken);
  buySteakButton = document
    .querySelector("#buy-more-steak-button")
    .removeEventListener("click", buyMoreSteak);
  buyAvocadoButton = document
    .querySelector("#buy-more-avocado-button")
    .removeEventListener("click", buyMoreAvocados);
  buyTortillasButton = document
    .querySelector("#buy-more-tortillas-button")
    .removeEventListener("click", buyMoreTortillas);
  buySalsaButton = document
    .querySelector("#buy-more-salsa-button")
    .removeEventListener("click", buyMoreSalsa);
}

//Functionality to the change price button

function updateTheDom() {
  displayTotalOrders = totalOrders;
  displayChickenOrders = document.querySelector("#chicken-orders").textContent =
    chicken.orders;
  displaySteakOrders = document.querySelector("#steak-orders").textContent =
    steak.orders;
  displayAvocadoOrders = document.querySelector("#avocado-orders").textContent =
    avocado.orders;
  displayAccount = document.querySelector("#account").textContent = account;
  // displayChickenTacoPrice = document.querySelector(
  //   "#chicken-taco-price"
  // ).textContent = chicken.price;
  // displaySteakTacoPrice = document.querySelector(
  //   "#steak-taco-price"
  // ).textContent = steak.price;
  // displayAvocadoTacoPrice = document.querySelector(
  //   "#avocado-taco-price"
  // ).textContent = avocado.price;
  displayChickenInv = document.querySelector("#chicken-inv").textContent =
    chicken.inv;
  displaySteakInv = document.querySelector("#steak-inv").textContent =
    steak.inv;
  displayAvocadoInv = document.querySelector("#avocado-inv").textContent =
    avocado.inv;
  displayTortillaInv = document.querySelector("#tortilla-inv").textContent =
    tortillas.inv;
  displaySalsaInv = document.querySelector("#salsa-inv").textContent =
    salsa.inv;
  displayReputation = document.querySelector(
    "#reputation"
  ).textContent = reputation.toFixed(1);
  displayPassersby = document.querySelector(
    "#total-passersby"
  ).textContent = passersby;
  displayChickenQty = document.querySelector("#chicken-qty").textContent =
    chicken.pack;
  displaySteakQty = document.querySelector("#steak-qty").textContent =
    steak.pack;
  displayAvocadoQty = document.querySelector("#avocado-qty").textContent =
    avocado.pack;
  displayTortillaQty = document.querySelector("#tortilla-qty").textContent =
    tortillas.pack;
  displaySalsaQty = document.querySelector("#salsa-qty").textContent =
    salsa.pack;
  displayChickenCost = document.querySelector("#chicken-cost").textContent =
    chicken.cost;
  displaySteakCost = document.querySelector("#steak-cost").textContent =
    steak.cost;
  displayAvodacoCost = document.querySelector("#avocado-cost").textContent =
    avocado.cost;
  displayTortillasCost = document.querySelector("#tortillas-cost").textContent =
    tortillas.cost;
  displaySalsaCost = document.querySelector("#salsa-cost").textContent =
    salsa.cost;
  if (openingCountdown > 0) {
    displayOpenOrClosed = document.querySelector("#open-closed").textContent =
      "Your truck opens in: " + openingCountdown;
  } else if (openingCountdown <= 0) {
    displayOpenOrClosed = document.querySelector("#open-closed").textContent =
      "Your truck is open";
  }
  displayDayCounter = document.querySelector(
    "#day-count"
  ).textContent = dayCounter;
}
