console.log("js is running");
// Create a div and set class
addStartSplash();

function addStartSplash() {
	disableButtons();
	var startSplash = document.createElement("div");
	startSplash.setAttribute("class", "start-button" );
	// Add some text
	startSplash.appendChild( document.createTextNode("Welcome to Indy's Taco Truck. In order to run a successful food truck, you'll need to buy all of your ingredients to make yummy tacos for people to enjoy. The more tacos you sell, the more money you'll make and the better reputation you'll have. Make sure to stock up on ingredients before customers show up. Make sure to keep tortillas and salsa in stock or you can't make any tacos! Click here to begin!") );
	// Add it to the document body
	document.querySelector('#taco-truck-scene').appendChild(startSplash);
	startSplash.addEventListener('click', startNewGame)
}

var customersStart;

function startNewGame() {
	enableButtons();
	document.querySelector(".start-button").remove();
	account = startingAccount;
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
	dayCounter = 1;
	reputation = startingRep;
	conversion = totalOrders/passersby;
	startDayDelay = 5000;
			openingCountdown = startDayDelay/1000;
			showCountdown = setInterval(count, 1000);
	adjustChanceToBuy();
	updateTheDom();
	//Give the player 10 secs to stock up before customers come by
	setTimeout(function(){
		customersStart = setInterval(newPasserbyAppear, newPassersbyInterval);
	}, startDayDelay);
	let startGameDelay = setTimeout(move, startDayDelay);
}

function adjustChanceToBuy(){
	chanceToBuy = (reputation*.75);
}

function improveRep(){
	reputation = reputation +.1;
}
function dingRep(){
	reputation = reputation -.5;
}

function calcConv() {
	conversion = totalOrders/passersby;
	score = (conversion-.375) + ((chickenOrders*chickenTacoPrice)+(steakOrders*steakTacoPrice)+(avocadoOrders*avocadoTacoPrice))+((account-startingAccount)/10);
	score = score.toFixed(1);
}

function startNewDay() {
	enableButtons();
	startDayDelay = 5000;
			openingCountdown = startDayDelay/1000;
			showCountdown = setInterval(count, 1000);
	dayCounter++;
	document.querySelector(".end-of-day").remove();
	updateTheDom();
	//Give the player some secs to stock up before customers come by
	setTimeout(function(){
		customersStart = setInterval(newPasserbyAppear, newPassersbyInterval);
	}, startDayDelay);
	let dayDelay = setTimeout(move, startDayDelay);
	truckOpen = true;
	adjustChanceToBuy();
}

function newPasserbyAppear(){
	let newPasserby = {};
	if (truckOpen == false){
		//clearTimeout(newCust);
		clearInterval(customersStart);
	} else {
		passersby++;
		updateTheDom();
		newPasserby.number = passersby;
		console.log("I'm walking by");
		//checkInv();
		if (passersby%2 == 0) {
			newPasserby.direction = "right";
		} else {
			newPasserby.direction = "left";
	}
	let x = Math.random();
	if(x > (1-(chanceToBuy/100))) {
		newPasserby.behavior = "customer";
		console.log("I will buy a taco");
	} else {
		//Customer walks away
		console.log("I'm not buying");
		newPasserby.behavior = "noncustomer";
	}
	if (newPasserby.behavior == "customer") {
		let x = Math.random();
		console.log(x);
		if (x < .4) {
			console.log("I'd like one chicken taco");
			if (chickenInv <= 0|| salsaInv <= 0 || tortillaInv <= 0) {
				console.log("Aw, you are out of chicken tacos!");
				newPasserby.speech = "outOfChicken";
				newPasserby.taco = "chicken";
				dingRep();
				adjustChanceToBuy();
				updateTheDom();
			} else {
			newPasserby.speech = "orderChicken"
			newPasserby.taco = "chicken";
			placeChickenOrder();
			improveRep();
			adjustChanceToBuy();
			}
		} else if (x > .8) {
			console.log("I'd like one avocado taco");
			if (avocadoInv <= 0|| salsaInv <= 0 || tortillaInv <= 0) {
				console.log("Aw, bummer, you are out of avocado tacos. I'm leaving");
				newPasserby.speech = "outOfAvocado";
				newPasserby.taco = "avocado";
				dingRep();
				adjustChanceToBuy();
				updateTheDom();
			} else {
			placeAvocadoOrder();
			improveRep();
			adjustChanceToBuy();
			newPasserby.speech = "orderAvocado"
			newPasserby.taco = "avocado";
			}
		} else {
			console.log("I'd like one steak taco");
			if (steakInv <= 0 || salsaInv <= 0 || tortillaInv <= 0) {
				console.log("Aw, bummer, you are out of steak tacos. I'm leaving");
				newPasserby.speech = "outOfSteak";
				newPasserby.taco = "steak";
				dingRep();
				adjustChanceToBuy();
				updateTheDom();
			} else {
			placeSteakOrder();
			improveRep();
			adjustChanceToBuy();
			newPasserby.speech = "orderSteak"
			newPasserby.taco = "steak";
		}
	}
	calcConv();
	updateTheDom();
	
		}
	}
	runImageCommands(newPasserby);
}

	//passersbyArray.push(newPasserby);

	//passersbyArray.forEach(function(){
	function runImageCommands(passerby){
		console.log("This is the customer:", passerby);
		if (passerby.behavior == "customer" && passerby.direction == "right") {
			passerby.image = document.createElement('img');
			passerby.image.src = "./img/huskieRight.gif";
			passerby.image.setAttribute("class", "customer" );
			document.querySelector('#taco-truck-scene').appendChild(passerby.image);
			passerby.image.style.position= 'absolute'; 
			passerby.image.style.top = '250px';
			passerby.image.style.left = '-140px';
			console.log("passerby is",passerby);
			moveRightToBuy(passerby);
		} else if (passerby.behavior == "customer" && passerby.direction == "left") {
			passerby.image = document.createElement('img');
			passerby.image.src = "./img/huskieLeft.gif";
			passerby.image.setAttribute("class", "customer" );
			document.querySelector('#taco-truck-scene').appendChild(passerby.image);
			passerby.image.style.position= 'absolute'; 
			passerby.image.style.top = '250px';
			passerby.image.style.right = '-140px';
			moveLeftToBuy(passerby);
		} else if (passerby.behavior == "noncustomer" && passerby.direction == "right") {
			passerby.image = document.createElement('img');
			passerby.image.src = "./img/huskieRight.gif";
			passerby.image.setAttribute("class", "customer" );
			document.querySelector('#taco-truck-scene').appendChild(passerby.image);
			passerby.image.style.position= 'absolute'; 
			passerby.image.style.top = '250px';
			passerby.image.style.left = '-140px';
			moveRightPasserby(passerby);
		} else if (passerby.behavior == "noncustomer" && passerby.direction == "left") {
			passerby.image = document.createElement('img');
			passerby.image.src = "./img/huskieLeft.gif";
			passerby.image.setAttribute("class", "customer" );
			document.querySelector('#taco-truck-scene').appendChild(passerby.image);
			passerby.image.style.position= 'absolute'; 
			passerby.image.style.top = '250px';
			passerby.image.style.right = '-140px';
			moveLeftPasserby(passerby);
		}
	}

var left=0, game = document.getElementById('taco-truck-scene');

function moveRightPasserby(currentCustomer){
	console.log("moveRightPasserby called")
    currentCustomer.image.classList.add("moving-right-passerby");
}

function moveLeftPasserby(currentCustomer){
	console.log("moveLeftPasserby called")
    currentCustomer.image.classList.add("moving-left-passerby");
}

function moveRightToBuy(currentCustomer){
    currentCustomer.image.setAttribute("class", "moving-right-to-buy");
    setTimeout(function(){
    	buyATacoRight(currentCustomer)}, 3000);
}
function buyATacoRight(currentCustomer){
	currentCustomer.image.classList.remove("moving-right-to-buy")
	currentCustomer.image.classList.add("stillBuyingRight");
	console.log("My properties are " + Object.keys(currentCustomer));
	if (currentCustomer.speech == "orderChicken") {
		currentCustomer.image.src = "./img/orderChickenRight.png";
	} else if (currentCustomer.speech == "orderAvocado") {
		currentCustomer.image.src = "./img/orderAvocadoRight.png";
	} else if (currentCustomer.speech == "orderSteak") {
		currentCustomer.image.src = "./img/orderSteakRight.png";
	} else if (currentCustomer.speech == "outOfChicken") {
		currentCustomer.image.src = "./img/outOfChickenRight.png";
	} else if (currentCustomer.speech == "outOfSteak") {
		currentCustomer.image.src = "./img/outOfSteakRight.png";
	} else if (currentCustomer.speech == "outOfAvocado") {
		currentCustomer.image.src = "./img/outOfAvocadoRight.png"
	}
	if (currentCustomer.speech == "orderChicken" || currentCustomer.speech == "orderSteak" || currentCustomer.speech == "orderAvocado") {
		setTimeout(function(){
			walkAwayWithTacoRight(currentCustomer)}, 2000);
	} else {
		setTimeout(function(){
			walkAwayWithoutTacoRight(currentCustomer)}, 2000);
	}
}

function walkAwayWithTacoRight(currentCustomer) {
	currentCustomer.image.removeAttribute("class", "stillBuyingRight")
	currentCustomer.image.setAttribute("class", "moving-right-with-taco");
	currentCustomer.image.src = "./img/withTacoRight.gif";
	setTimeout(function(){
		deleteCustomer(currentCustomer);}, 3000);
}

function walkAwayWithoutTacoRight(currentCustomer) {
	currentCustomer.image.removeAttribute("class", "stillBuyingRight")
	currentCustomer.image.setAttribute("class", "moving-right-with-taco");
	currentCustomer.image.src = "./img/huskieRight.gif";
	setTimeout(function(){
		deleteCustomer(currentCustomer);}, 3000);
}

function moveLeftToBuy(currentCustomer){
    currentCustomer.image.setAttribute("class", "moving-left-to-buy");
    setTimeout(function(){
    	buyATacoLeft(currentCustomer)}, 3000);
}

function buyATacoLeft(currentCustomer){
	console.log("what are you:", currentCustomer)
	console.log("My properties are " + Object.keys(currentCustomer));
	currentCustomer.image.classList.remove('moving-left-to-buy');
	currentCustomer.image.classList.add('stillBuyingLeft');
	if (currentCustomer.speech == "orderChicken") {
		currentCustomer.image.src = "./img/orderChickenLeft.png";
	} else if (currentCustomer.speech == "orderAvocado") {
		currentCustomer.image.src = "./img/orderAvocadoLeft.png";
	} else if (currentCustomer.speech == "orderSteak") {
		currentCustomer.image.src = "./img/orderSteakLeft.png";
	} else if (currentCustomer.speech == "outOfChicken") {
		currentCustomer.image.src = "./img/outOfChickenLeft.png";
	} else if (currentCustomer.speech == "outOfSteak") {
		currentCustomer.image.src = "./img/outOfSteakLeft.png";
	} else if (currentCustomer.speech == "outOfAvocado") {
		currentCustomer.image.src = "./img/outOfAvocadoLeft.png"
	}
	if (currentCustomer.speech == "orderChicken" || currentCustomer.speech == "orderSteak" || currentCustomer.speech == "orderAvocado") {
		setTimeout(function(){
			walkAwayWithTacoLeft(currentCustomer)}, 2000);
	} else {
		setTimeout(function(){
			walkAwayWithoutTacoLeft(currentCustomer)}, 2000);
	}
} 

function walkAwayWithTacoLeft(currentCustomer) {
	currentCustomer.image.removeAttribute('class', 'stillBuyingLeft')
	currentCustomer.image.setAttribute("class", "moving-left-with-taco");
	currentCustomer.image.src = "./img/withTacoLeft.gif";
	setTimeout(function(){
		deleteCustomer(currentCustomer);}, 3000);
}

function walkAwayWithoutTacoLeft(currentCustomer) {
	currentCustomer.image.removeAttribute('class', 'stillBuyingLeft')
	currentCustomer.image.setAttribute("class", "moving-left-with-taco");
	currentCustomer.image.src = "./img/huskieLeft.gif";
	setTimeout(function(){
		deleteCustomer(currentCustomer);}, 3000);
}

function deleteCustomer(currentCustomer){
	// passersbyArray.splice(currentCustomer.number - 1, 1);
	//passersbyArray.pop();
	document.querySelector('#taco-truck-scene').removeChild(currentCustomer.image);
}

function endOfDay() {
	disableButtons();
	console.log(truckOpen);
	calcConv();
	updateTheDom();
	var eodSplash = document.createElement("div");
	eodSplash.setAttribute("class", "end-of-day" );
	// Add some text
	if(score <= 0) {
		//displsy: none => display: block
		eodSplash.appendChild( document.createTextNode(`Yikes, your business is on the rails! See if you can do better tomorrow! Click here to start the next day.     Money in the account: $${account-startingAccount}. Reputation: ${reputation.toFixed(1)}. Customer Conversion Rate: ${(conversion*100).toFixed(1)}%. Score: ${score}.`) );}
		else if (score > 0 && score < 50){
		eodSplash.appendChild( document.createTextNode(`Congratulations, you survived the day! See if you can do even better tomorrow! Click here to start the next day.     Money in the account: $${account-startingAccount}. Reputation: ${reputation.toFixed(1)}. Customer Conversion Rate: ${(conversion*100).toFixed(1)}%. Score: ${score}.`) );}
		else if (score > 50 && score < 100) {
		eodSplash.appendChild( document.createTextNode(`Hey, that's pretty great! You are running a successful business. See if you can do even better tomorrow! Click here to start the next day.     Money in the account: $${account-startingAccount}. Reputation: ${reputation.toFixed(1)}. Customer Conversion Rate: ${(conversion*100).toFixed(1)}%. Score: ${score}.`) );}
		else if (score > 100) {
		eodSplash.appendChild( document.createTextNode(`Wow, killer score! See if you can do even better tomorrow! Click here to start the next day.     Money in the account: $${account-startingAccount}. Reputation: ${reputation.toFixed(1)}. Customer Conversion Rate: ${(conversion*100).toFixed(1)}%. Score: ${score}.`) );
		}
	// Add it to the document body
	document.querySelector('#taco-truck-scene').appendChild(eodSplash);
	eodSplash.addEventListener('click', startNewDay);
	chanceToBuy = 0;
}

function checkInv() {
	if(chickenInv == 0 || steakInv == 0 || avocadoInv == 0 || salsaInv == 0 || tortillaInv == 0) {
		console.log("Uh oh, you don't have enough ingredients to make more tacos. You need to buy more inventory.")
	} 
}

//Random chance of whether or not a customer will buy
//Function of Math.random(0-1), greater than .5 means they will buy, then run the whichTaco function (later this point of purchase can be manipulated by reputation and advertising)


//Random assignment of what kind of taco they want
//Function of Math.random (0-1) < .4 = steak, .4 - .8 = chicken, > .8 = avocado
// function whichTaco(){
// 	let x = Math.random();
// 	console.log(x);
// 	if (x < .4) {
// 		console.log("I'd like one chicken taco");
// 		if (chickenInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
// 			console.log("Aw, bummer, you are out of chicken tacos. I'm leaving");
// 			//Reduce Reputation
// 			dingRep();
// 			adjustChanceToBuy();

// 			updateTheDom();
// 			return;
// 		}
// 		placeChickenOrder();
// 		//Increase reputation
// 		improveRep();
// 		adjustChanceToBuy();
// 	} else if (x > .8) {
// 		console.log("I'd like one avocado taco");
// 		if (avocadoInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
// 			console.log("Aw, bummer, you are out of avocado tacos. I'm leaving");
// 			//Reduce reputation
// 			dingRep();
// 			adjustChanceToBuy();
// 			updateTheDom();
// 			return;
// 		}
// 		placeAvocadoOrder();
// 		//Increase reputation
// 		improveRep();
// 		adjustChanceToBuy();
// 	} else {
// 		console.log("I'd like one steak taco");
// 		if (steakInv <= 0 || salsaInv <= 0 || tortillaInv <= 0) {
// 			console.log("Aw, bummer, you are out of steak tacos. I'm leaving");
// 			//Reduce reputation
// 			dingRep();
// 			adjustChanceToBuy();
// 			updateTheDom();
// 			return;
// 		}
// 		placeSteakOrder();
// 		//Increase reputation
// 		improveRep();
// 		adjustChanceToBuy();
// 	}
// };

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
	updateTheDom();
  var bar = document.querySelector('#percent-progress'); 
  var width = 1;
  //Adds 1% to the loading bar each 1/3 of a second so that loading bar takes 30 secs
  var tick = setInterval(progress, 380);
  function progress() {
  	//When the bar is 100% filled, stop the timer
    if (width >= 100) {
    	chanceToBuy = 0;
    	truckOpen = false;
    	clearInterval(tick);
    	endOfDay();
    } else if (width >= 90) {
    	chanceToBuy = 0;
    	width++;
    	bar.style.width = width + '%';
    } else {
      stopCustomer = false;
      width++; 
      bar.style.width = width + '%';
    }
  }
}

function count() {
	updateTheDom();
	if (openingCountdown <= 0){clearInterval(showCountdown);}
	console.log(openingCountdown)
	openingCountdown--;
}

