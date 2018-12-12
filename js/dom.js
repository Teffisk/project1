//Display the number of orders in game
let displayTotalOrders = document.querySelector('#total-orders').textContent = totalOrders;
let displayChickenOrders = document.querySelector('#chicken-orders').textContent = chickenOrders;
let displaySteakOrders = document.querySelector('#steak-orders').textContent = steakOrders;
let displayAvocadoOrders = document.querySelector('#avocado-orders').textContent = avocadoOrders;

let gameScene = document.querySelector('#taco-truck-scene')
let displayAccount = document.querySelector('#account').textContent = account;

//Display taco prices in game
let displaChickenTacoPrice = document.querySelector('#chicken-taco-price').textContent = chickenTacoPrice;
let dispalySteakTacoPrice = document.querySelector('#steak-taco-price').textContent = steakTacoPrice;
let displayAvocadoTacoPrice = document.querySelector('#avocado-taco-price').textContent = avocadoTacoPrice;

//Display inventory in game
let displayChickenInv = document.querySelector('#chicken-inv').textContent = chickenInv;
let displaySteakInv = document.querySelector('#steak-inv').textContent = steakInv;
let displayAvocadoInv = document.querySelector('#avocado-inv').textContent = avocadoInv;
let displayTortillaInv = document.querySelector('#tortilla-inv').textContent = tortillaInv;
let displaySalsaInv = document.querySelector('#salsa-inv').textContent = salsaInv;

//Display Reputation which affects chance to buy
let displayReputation = document.querySelector('#reputation').textContent = reputation
let displayPassersby = document.querySelector('#total-passersby').textContent = passersby;

//Add event listeners to buttons
let buyChickenButton = document.querySelector('#buy-more-chicken-button').addEventListener('click', buyMoreChicken);
let buySteakButton = document.querySelector('#buy-more-steak-button').addEventListener('click', buyMoreSteak);
let buyAvocadoButton = document.querySelector('#buy-more-avocado-button').addEventListener('click', buyMoreAvocado);
let buyTortillasButton = document.querySelector('#buy-more-tortillas-button').addEventListener('click', buyMoreTortillas);
let buySalsaButton = document.querySelector('#buy-more-salsa-button').addEventListener('click', buyMoreSalsa);

function enableButtons(){
	buyChickenButton = document.querySelector('#buy-more-chicken-button').addEventListener('click', buyMoreChicken);
	buySteakButton = document.querySelector('#buy-more-steak-button').addEventListener('click', buyMoreSteak);
	buyAvocadoButton = document.querySelector('#buy-more-avocado-button').addEventListener('click', buyMoreAvocado);
	buyTortillasButton = document.querySelector('#buy-more-tortillas-button').addEventListener('click', buyMoreTortillas);
	buySalsaButton = document.querySelector('#buy-more-salsa-button').addEventListener('click', buyMoreSalsa);
}

function disableButtons(){
	buyChickenButton = document.querySelector('#buy-more-chicken-button').removeEventListener('click', buyMoreChicken);
	buySteakButton = document.querySelector('#buy-more-steak-button').removeEventListener('click', buyMoreSteak);
	buyAvocadoButton = document.querySelector('#buy-more-avocado-button').removeEventListener('click', buyMoreAvocado);
	buyTortillasButton = document.querySelector('#buy-more-tortillas-button').removeEventListener('click', buyMoreTortillas);
	buySalsaButton = document.querySelector('#buy-more-salsa-button').removeEventListener('click', buyMoreSalsa);
}
//Show the cost per pound and servings per pound of each ingredient
let displayChickenCost = document.querySelector('#chicken-cost').textContent = chickenCost;
let displaySteakCost = document.querySelector('#steak-cost').textContent = steakCost;
let displayAvocadoCost = document.querySelector('#avocado-cost').textContent = avocadoCost;
let displayTortillaCost = document.querySelector('#tortilla-cost').textContent = tortillaCost;
let displaysalsaCost = document.querySelector('#salsa-cost').textContent = salsaCost;

//Show the serving per pound of each ingredient
let displayChickenQty = document.querySelector('#chicken-qty').textContent = chickenPack;
let displaySteakQty = document.querySelector('#steak-qty').textContent = steakPack;
let displayAvocadoQty = document.querySelector('#avocado-qty').textContent = avocadoPack;
let displayTortillaQty = document.querySelector('#tortilla-qty').textContent = tortillaPack;
let displaySalsaQty = document.querySelector('#salsa-qty').textContent = salsaPack;

//On screen game displays
let displayOpenOrClosed = document.querySelector('#open-closed').textContent = openingCountdown
let displayDayCounter = document.querySelector('#day-count').textContent = dayCounter;

//Functionality to the change price button


function updateTheDom() {
	displayTotalOrders = document.querySelector('#total-orders').textContent = totalOrders;
	displayChickenOrders = document.querySelector('#chicken-orders').textContent = chickenOrders;
	displaySteakOrders = document.querySelector('#steak-orders').textContent = steakOrders;
	displayAvocadoOrders = document.querySelector('#avocado-orders').textContent = avocadoOrders;
	displayAccount = document.querySelector('#account').textContent = account;
	displaChickenTacoPrice = document.querySelector('#chicken-taco-price').textContent = chickenTacoPrice;
	dispalySteakTacoPrice = document.querySelector('#steak-taco-price').textContent = steakTacoPrice;
	displayAvocadoTacoPrice = document.querySelector('#avocado-taco-price').textContent = avocadoTacoPrice;
	displayChickenInv = document.querySelector('#chicken-inv').textContent = chickenInv;
	displaySteakInv = document.querySelector('#steak-inv').textContent = steakInv;
	displayAvocadoInv = document.querySelector('#avocado-inv').textContent = avocadoInv;
	displayTortillaInv = document.querySelector('#tortilla-inv').textContent = tortillaInv;
	displaySalsaInv = document.querySelector('#salsa-inv').textContent = salsaInv;
	displayReputation = document.querySelector('#reputation').textContent = reputation.toFixed(1);
	displayPassersby = document.querySelector('#total-passersby').textContent = passersby;
	displayChickenQty = document.querySelector('#chicken-qty').textContent = chickenPack;
	displaySteakQty = document.querySelector('#steak-qty').textContent = steakPack;
	displayAvocadoQty = document.querySelector('#avocado-qty').textContent = avocadoPack;
	displayTortillaQty = document.querySelector('#tortilla-qty').textContent = tortillaPack;
	displaySalsaQty = document.querySelector('#salsa-qty').textContent = salsaPack;
	if (openingCountdown > 0){ 
		displayOpenOrClosed = document.querySelector('#open-closed').textContent = "Your truck opens in: "+openingCountdown;
	} else if (openingCountdown <= 0){
		displayOpenOrClosed = document.querySelector('#open-closed').textContent = "Your truck is open"
	}
	displayDayCounter = document.querySelector('#day-count').textContent = dayCounter;
}