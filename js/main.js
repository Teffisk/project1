console.log("js is running");
startNewGame();
toBuyOrNotToBuy();

//let orders = document.querySelector

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
	chanceToBuy = .5;
	chickenTacoPrice = 3;
	steakTacoPrice = 3;
	avocadoTacoPrice = 3;
}

//Random chance of whether or not a customer will buy
//Function of Math.random(0-1), greater than .5 means they will buy, then run the whichTaco function (later this point of purchase can be manipulated by reputation and advertising)
function toBuyOrNotToBuy(){
	x = Math.random();
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
//Increase account by chickenTacoPrice, reduce inventory of chickenTacoOrder
function whichTaco(){
	Math.random = x;
	console.log(x);
	if (x < .4) {
		console.log("I'd like one chicken taco");
		tacoChoice = "chicken";
		placeChickenOrder();
	} else if (x > .8) {
		console.log("I'd like one avocado taco");
		tacoChoice = "avocado";
		placeAvocadoOrder();
	} else {
		console.log("I'd like one steak taco");
		tacoChoice = "steak";
		placeSteakOrder();
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
	displayStatus();
}

function placeSteakOrder() {
	account = account + steakTacoPrice;
	steakInv--;
	salsaInv--;
	tortillaInv--;
	steakOrders++;
	//This line is redundate, need to clean up
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	displayStatus();
}

function placeAvocadoOrder() {
	account = account + avocadoTacoPrice;
	avocadoInv--;
	salsaInv--;
	tortillaInv--;
	avocadoOrders++;
	//This line is redundate, need to clean up
	totalOrders = chickenOrders + steakOrders + avocadoOrders;
	displayStatus();
}

function displayStatus(){
	console.log("account: $"+account);
	console.log("Chicken Inv: "+chickenInv);
	console.log("Steak Inv: "+steakInv);
	console.log("Avocado Inv: "+avocadoInv);
	console.log("Tortilla Inv: "+tortillaInv);
	console.log("Salsa Inv: "+salsaInv);
	console.log("Chicken Orders: "+chickenOrders);
	console.log("Steak Orders: "+steakOrders);
	console.log("Avocado Orders: "+avocadoOrders)
	console.log("Total Orders: "+totalOrders)
}


