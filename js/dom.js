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
}