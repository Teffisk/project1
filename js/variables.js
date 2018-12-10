//Global variables
let account;
let customer;
let chanceToBuy;
let newChanceToBuy = .6;
let tacoChoice;
let chickenOrders;
let steakOrders;
let avocadoOrders;
let totalOrders;
let reputation;


//Food prices
let chickenTacoPrice;
let steakTacoPrice;
let avocadoTacoPrice;

//Invetory units
let steakPack = 12;
let salsaPack = 30;
let avocadoPack = 8;
let chickenPack = 10;
let tortillaPack = 40;

//Inventory costs
let tortillaCost = 5;
let salsaCost = 20;
let chickenCost = 10;
let steakCost = 12;
let avocadoCost = 10;


//Recipes
let chickenServing = 1;
let steakServing = 1;
let avocadoServing = 1;
let tortillaServing = 1;
let salsaServing = 1;

//Customer Orders
// let chickenTacoIng = chickenServing + tortillaServing + salsaServing;
// let steakTacoIng = steakServing + tortillaServing + salsaServing;
// let avcadoTacoIng = avocadoServing + tortillaServing + salsaServing;

//Inventory
let chickenInv;
let steakInv;
let avocadoInv;
let salsaInv;
let tortillaInv;

//Display the number of orders in game
let displayTotalOrders = document.querySelector('#total-orders').textContent = totalOrders;
let displayChickenOrders = document.querySelector('#chicken-orders').textContent = chickenOrders;
let displaySteakOrders = document.querySelector('#steak-orders').textContent = steakOrders;
let displayAvocadoOrders = document.querySelector('#avocado-orders').textContent = avocadoOrders;

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
let displayReputation = document.querySelector('#reputation').textContent = reputation;

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
	displayReputation = document.querySelector('#reputation').textContent = reputation;
}