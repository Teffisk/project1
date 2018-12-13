console.log("js is running");
// Create a div and set class
addStartSplash();

function addStartSplash() {
	disableButtons();
	var startSplash = document.createElement("div");
	startSplash.setAttribute("class", "start-button" );
	// Add some text
	startSplash.appendChild( document.createTextNode("Welcome to Indy's Taco Truck. In order to run a successful food truck, you'll need to buy all of your ingredients to make yummy tacos for people to enjoy. The more tacos you sell, the more money you'll make and the better reputation you'll have. Make sure to stock up on ingredients before customers show up. Click here to begin!") );
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
		customersStart = setInterval(newPasserby, newPassersbyInterval);
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
		customersStart = setInterval(newPasserby, newPassersbyInterval);
	}, startDayDelay);
	let dayDelay = setTimeout(move, startDayDelay);
	truckOpen = true;
	adjustChanceToBuy();
}

function newPasserby(){
	if (truckOpen == false){
		//clearTimeout(newCust);
		clearInterval(customersStart);
	} else {
	passersby++;
	checkInv();
	console.log("I'm walking by");
	let x = Math.random();
	console.log("Chance to buy is: "+(chanceToBuy)+"%")
	if(x > (1-(chanceToBuy/100))) {
		console.log("total orders is: "+totalOrders+" conv rate is: "+conversion);
		console.log("I will buy a taco");
		createNewCustomer();
		newCust = setTimeout(whichTaco, customerBuyDelay);

	} else {
		//Customer walks away
		console.log("I'm not buying");
		createNewNoncustomer();
	}
	//var newCust = setTimeout(toBuyOrNotToBuy, customerBuyDelay);
	calcConv();
	updateTheDom();
	}
}

function createNewNoncustomer(){
	noncustomerImg = document.createElement('img');
	noncustomerImg.setAttribute("id", `${passersby}`);
	if (noncustomerImg.id%2 == 0) {
		noncustomerImgRight = noncustomerImg;
		noncustomerImgRight = document.createElement('img');
		noncustomerImgRight.src = "./img/huskieRight.gif";
		noncustomerImgRight.setAttribute("class", "noncustomer" );
		document.querySelector('#taco-truck-scene').appendChild(noncustomerImgRight);
		noncustomerImgRight.style.position= 'absolute'; 
		noncustomerImgRight.style.top = '250px';
		noncustomerImgRight.style.left = '-140px';
		noncustomerRightArray.push(noncustomerImgRight);
		noncustomerRightArray.forEach(function(customer) {
		moveRightPasserby(customer);})
	} else  if (noncustomerImg.id%2 != 0) {
		noncustomerImgLeft = noncustomerImg;
		noncustomerImgLeft = document.createElement('img');
		noncustomerImgLeft.src = "./img/huskieLeft.gif";
		noncustomerImgLeft.setAttribute("class", "noncustomer" );
		document.querySelector('#taco-truck-scene').appendChild(noncustomerImgLeft);
		noncustomerImgLeft.style.position= 'absolute'; 
		noncustomerImgLeft.style.top = '250px';
		noncustomerImgLeft.style.right = '-140px';
		noncustomerLeftArray.push(noncustomerImgLeft);
		noncustomerLeftArray.forEach(function(customer) {
			moveLeftPasserby(customer);
			});
	}
}

function moveRightPasserby(currentCustomer){
    currentCustomer.classList.add("moving-right-passerby");
}

function moveLeftPasserby(currentCustomer){
    currentCustomer.classList.add("moving-left-passerby");
}

function createNewCustomer(){
	customerImg = document.createElement('img');
	customerImg.setAttribute("id", `${passersby}`);
	if (customerImg.id%2 == 0) {
		customerImgRight = customerImg;
		customerImgRight.src = "./img/huskieRight.gif";
		customerImgRight.setAttribute("class", "customer" );
		customerImgRight.setAttribute("id", `${passersby}`);
		document.querySelector('#taco-truck-scene').appendChild(customerImgRight);
		customerImgRight.style.position= 'absolute'; 
		customerImgRight.style.top = '250px';
		customerImgRight.style.left = '-140px';
		customerRightArray.push(customerImgRight);
		customerRightArray.forEach(function(customer) {
			moveRightToBuy(customer);
	   });
	} else {
		customerImgLeft = customerImg;
		customerImgLeft.src = "./img/huskieLeft.gif";
		customerImgLeft.setAttribute("class", "customer" );
		customerImgLeft.setAttribute("id", `${passersby}`);
		document.querySelector('#taco-truck-scene').appendChild(customerImgLeft);
		customerImgLeft.style.position= 'absolute'; 
		customerImgLeft.style.top = '250px';
		customerImgLeft.style.right = '-145px';
		customerLeftArray.push(customerImgLeft);
		customerLeftArray.forEach(function(customer) {
	  		moveLeftToBuy(customer);
	   });
	}
}

function moveRightToBuy(currentCustomer){
    currentCustomer.setAttribute("class", "moving-right-to-buy");
    setTimeout(function(){
    	buyATacoRight(currentCustomer)}, 3000);
}

function moveLeftToBuy(currentCustomer){
    currentCustomer.setAttribute("class", "moving-left-to-buy");
    setTimeout(function(){
    	buyATacoLeft(currentCustomer)}, 3000);
}

var left=0, game = document.getElementById('taco-truck-scene');

function buyATacoRight(currentCustomer){
	//remove moving-right-to-buy class
	currentCustomer.removeAttribute('class', 'moving-right-to-buy');
	currentCustomer.src = "./img/buyTacoRight.png";
	currentCustomer.setAttribute("class", "stillBuyingRight")
	//Also display a pop up diallog bubble
	setTimeout(function(){
		walkAwayWithTacoRight(currentCustomer)}, 2000);
}

function walkAwayWithTacoRight(currentCustomer) {
	currentCustomer.removeAttribute("class", "stillBuyingRight")
	currentCustomer.setAttribute("class", "moving-right-with-taco");
	currentCustomer.src = "./img/withTacoRight.gif";
}

function buyATacoLeft(currentCustomer){
	//remove moving-right-to-buy class
	currentCustomer.removeAttribute('class', 'moving-left-to-buy');
	currentCustomer.src = "./img/buyTacoLeft.png";
	currentCustomer.setAttribute('class', 'stillBuyingLeft')
	//Also display a pop up diallog bubble
	setTimeout(function(){
		walkAwayWithTacoLeft(currentCustomer)}, 2000);
}

function walkAwayWithTacoLeft(currentCustomer) {
	currentCustomer.removeAttribute('class', 'stillBuyingLeft')
	currentCustomer.setAttribute("class", "moving-left-with-taco");
	currentCustomer.src = "./img/withTacoLeft.gif";
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
function whichTaco(){
	let x = Math.random();
	console.log(x);
	if (x < .4) {
		console.log("I'd like one chicken taco");
		if (chickenInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of chicken tacos. I'm leaving");
			//Reduce Reputation
			dingRep();
			adjustChanceToBuy();

			updateTheDom();
			return;
		}
		placeChickenOrder();
		//Increase reputation
		improveRep();
		adjustChanceToBuy();
	} else if (x > .8) {
		console.log("I'd like one avocado taco");
		if (avocadoInv == 0|| salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of avocado tacos. I'm leaving");
			//Reduce reputation
			dingRep();
			adjustChanceToBuy();
			updateTheDom();
			return;
		}
		placeAvocadoOrder();
		//Increase reputation
		improveRep();
		adjustChanceToBuy();
	} else {
		console.log("I'd like one steak taco");
		if (steakInv <= 0 || salsaInv <= 0 || tortillaInv <= 0) {
			console.log("Aw, bummer, you are out of steak tacos. I'm leaving");
			//Reduce reputation
			dingRep();
			adjustChanceToBuy();
			updateTheDom();
			return;
		}
		placeSteakOrder();
		//Increase reputation
		improveRep();
		adjustChanceToBuy();
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
	updateTheDom();
  var bar = document.querySelector('#percent-progress'); 
  var width = 1;
  //Adds 1% to the loading bar each 1/3 of a second so that loading bar takes 30 secs
  var tick = setInterval(progress, 380);
  function progress() {
  	//When the bar is 100% filled, stop the timer
    if (width >= 100) {
    	truckOpen = false;
    	clearInterval(tick);
    	endOfDay();
    } else {
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

