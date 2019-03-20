//Global variables
let startSplash;
let account = 0;
let startingAccount = 60;
let truckOpen;
let customer;
let chanceToBuy;
let tacoChoice;
let totalOrders = 0;
let reputation = 0;
let passersby = 0;
let customerBuyDelay = 2000;
let newPassersbyInterval = 1000;
let startDayDelay = 5000;
let startingRep = 50;
let conversion;
let dayCounter;
let openingCountdown;
let stopCustomers;
let noncustomerRightArray = [];
let noncustomerLeftArray = [];
let customerRightArray = [];
let customerLeftArray = [];
let newCust;
let passersbyArray = [];

//Food prices
let chicken = {
  price: 3,
  pack: 6,
  cost: 10,
  inv: 0,
  orders: 0,
  name: "chicken"
};
let steak = {
  price: 3,
  pack: 6,
  cost: 12,
  inv: 0,
  orders: 0,
  name: "steak"
};
let avocado = {
  price: 3,
  pack: 4,
  cost: 10,
  inv: 0,
  orders: 0,
  name: "avocado"
};

let tortillas = {
  price: 0,
  pack: 20,
  cost: 5,
  inv: 0,
  orders: 0,
  name: "tortillas"
};

let salsa = {
  price: 0,
  pack: 15,
  cost: 12,
  inv: 0,
  orders: 0,
  name: "salsa"
};

let score =
  conversion -
  0.375 +
  (chicken.orders * chicken.price +
    steak.orders * steak.price +
    avocado.orders * avocado.price) +
  (account - startingAccount);

let buyChickenButton;
let buySteakButton;
let buyAvocadoButton;
let buyTortillasButton;
let buySalsaButton;
