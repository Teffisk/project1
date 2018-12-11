console.log("js is running");
// Create a div and set class
var startSplash = document.createElement("div");
startSplash.setAttribute("class", "start-button" );
// Add some text
startSplash.appendChild( document.createTextNode("Press start to begin!") );
// Add it to the document body
document.querySelector('#taco-truck-scene').appendChild(startSplash);

startSplash.addEventListener('click', startNewGame)

function customersStart(){
	//Customers walkby every three seconds
	setInterval(newPasserby, 3000);
}

function startNewGame() {
	account = 100;
	chickenInv = 0;
	steakInv = 0;
	avocadoInv = 0;
	tortillaInv = 0;
	salsaInv = 0;
	chickenOrders = 0;
	steakOrders = 0;
	avocadoOrders = 0;
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	chickenTacoPrice = 3;
	steakTacoPrice = 3;
	avocadoTacoPrice = 3;
	chickenTacoPrice = 3;
	steakTacoPrice = 3;
	avocadoTacoPrice = 3;
	passersby = 0;
	reputation = 50;
	chanceToBuy = (reputation/10);
	updateTheDom();
	//Give the player 10 secs to stock up before customers come by
	setTimeout(customersStart, 5000);
	move();
}

//A setInterval function that spanws customers at a set frequency. This frequency can be adjusted by your reputation and ads.
//A passerby will spawn every 3 seconds, and 2 seconds after that, they walk by the taco truck and the toBuyOrNotToBuy function runs

function newPasserby(){
	passersby++;
	checkInv();
	console.log("I'm just walking by");
	setTimeout(toBuyOrNotToBuy, 2000)
}

function checkInv() {
	if(chickenInv == 0 || steakInv == 0 || avocadoInv == 0 || salsaInv == 0 || tortillaInv == 0) {
		console.log("Uh oh, you don't have enough ingredients to make more tacos. You need to buy more inventory.")
	} 
}

//Random chance of whether or not a customer will buy
//Function of Math.random(0-1), greater than .5 means they will buy, then run the whichTaco function (later this point of purchase can be manipulated by reputation and advertising)
function toBuyOrNotToBuy(){
	let x = Math.random();
	console.log("Chance to buy is: "+chanceToBuy)
	if(x > (1-chanceToBuy)) {
		console.log("I'm getting a taco")
		whichTaco();

	} else {
		//Customer walks away
		console.log("I'm not buying")
		return;
	}
}

//Random assignment of what kind of taco they want
//Function of Math.random (0-1) < .4 = steak, .4 - .8 = chicken, > .8 = avocado
function whichTaco(){
	let x = Math.random();
	console.log(x);
	if (x < .4) {
		console.log("I'd like one chicken taco");
		if (chickenInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of chicken tacos. I'm leaving");
			//Reduce Reputation
			reputation = reputation - 3;
			updateTheDom();
			return;
		}
		placeChickenOrder();
		//Increase reputation
		reputation++;
	} else if (x > .8) {
		console.log("I'd like one avocado taco");
		if (avocadoInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of avocado tacos. I'm leaving");
			//Reduce reputation
			reputation = reputation - 3;
			updateTheDom();
			return;
		}
		placeAvocadoOrder();
		//Increase reputation
		reputation++;
	} else {
		console.log("I'd like one steak taco");
		if (steakInv <= 0 || salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of steak tacos. I'm leaving");
			//Reduce reputation
			reputation = reputation - 3;
			updateTheDom();
			return;
		}
		placeSteakOrder();
		//Increase reputation
		reputation++;
	}
};

function placeChickenOrder() {
	account = account + chickenTacoPrice;
	chickenInv--;
	salsaInv--;
	tortillaInv--;
	chickenOrders++;
	//This line is redundate, need to clean up
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	updateTheDom();
}

function placeSteakOrder() {
	account = account + steakTacoPrice;
	steakInv--;
	salsaInv--;
	tortillaInv--;
	steakOrders++;
	//This line is redundate, need to clean up
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	updateTheDom();
}

function placeAvocadoOrder() {
	account = account + avocadoTacoPrice;
	avocadoInv--;
	salsaInv--;
	tortillaInv--;
	avocadoOrders++;
	//This line is redundate, need to clean up
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	updateTheDom();
}

function dayProgressionBar(){
	setInterval(dayProgress, 1)
}

function move() {
  var bar = document.querySelector('#percent-progress'); 
  var width = 1;
  //Adds 1% to the loading bar each 1/3 of a second so that loading bar takes 30 secs
  var tick = setInterval(progress, 333);
  function progress() {
  	//When the bar is 100% filled, stop the timer
    if (width >= 100) {
      clearInterval(tick);
      //Run the day 1 over function
    } else {
      width++; 
      bar.style.width = width + '%'; 
    }
  }
}


