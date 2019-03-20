function buyMoreChicken() {
  if (account - chicken.cost < 0) {
    console.log("Oh no, you don't have enough money to buy that.");
  } else {
    chicken.inv += chicken.pack;
    account = account - chicken.cost;
    updateTheDom();
  }
}

function buyMoreSteak() {
  if (account - steak.cost < 0) {
    console.log("Oh no, you don't have enough money to buy that.");
  } else {
    steak.inv += steak.pack;
    account = account - steak.cost;
    updateTheDom();
  }
}

function buyMoreAvocados() {
  if (account - avocado.cost < 0) {
    console.log("Oh no, you don't have enough money to buy that.");
  } else {
    avocado.inv = avocado.inv + avocado.pack;
    account = account - avocado.cost;
    updateTheDom();
  }
}

function buyMoreTortillas() {
  if (account - tortillas.cost < 0) {
    console.log("Oh no, you don't have enough money to buy that.");
  } else {
    tortillas.inv = tortillas.inv + tortillas.pack;
    account = account - tortillas.cost;
    updateTheDom();
  }
}

function buyMoreSalsa() {
  if (account - salsa.cost < 0) {
    console.log("Oh no, you don't have enough money to buy that.");
  } else {
    salsa.inv = salsa.inv + salsa.pack;
    account = account - salsa.cost;
    updateTheDom();
  }
}
