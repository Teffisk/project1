console.log("js is running");
startNewGame();
toBuyOrNotToBuy();
setInterval(newPasserby, 3000);
console.log(totalOrders)


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

//A setInterval function that spanws customers at a set frequency. This frequency can be adjusted by your reputation and ads.
//A passerby will spawn every 3 seconds, and 2 seconds after that, they walk by the taco truck and the toBuyOrNotToBuy function runs
// function passerbySpawn(){
// 	setInterval(newPasserby(), 3000)
// }

function newPasserby(){
	console.log("I'm just walking by");
	setTimeout(toBuyOrNotToBuy, 2000)
}

//Random chance of whether or not a customer will buy
//Function of Math.random(0-1), greater than .5 means they will buy, then run the whichTaco function (later this point of purchase can be manipulated by reputation and advertising)
function toBuyOrNotToBuy(){
	let x = Math.random();
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
	displayStatus();
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
	displayStatus();
	updateTheDom();
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


