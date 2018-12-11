function buyMoreChicken() {
	if (account-chickenCost < 0) {
		console.log("Oh no, you don't have enough money to buy that.")
	} else {
	chickenInv = chickenInv + chickenPack;
	account = account - chickenCost;
	updateTheDom();
	}
}

function buyMoreSteak(){
	if (account-steakCost < 0) {
		console.log("Oh no, you don't have enough money to buy that.")
	} else {
	steakInv = steakInv + steakPack;
	account = account - steakCost;
	updateTheDom();
	}
}

function buyMoreAvocado() {
	if (account-avocadoCost < 0) {
		console.log("Oh no, you don't have enough money to buy that.")
	} else {
	avocadoInv = avocadoInv + avocadoPack;
	account = account - avocadoCost;
	updateTheDom();
	}
}

function buyMoreTortillas() {
	if (account-tortillaCost < 0) {
		console.log("Oh no, you don't have enough money to buy that.")
	} else {
	tortillaInv = tortillaInv + tortillaPack;
	account = account - tortillaCost;
	updateTheDom();
	}
}

function buyMoreSalsa() {
	if (account-salsaCost < 0) {
		console.log("Oh no, you don't have enough money to buy that.")
	} else {
	salsaInv = salsaInv + salsaPack;
	account = account - salsaCost;
	updateTheDom();
	}
}

