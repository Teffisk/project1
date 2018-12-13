//Global variables
let startSplash;
let account;
let startingAccount = 100;
let truckOpen;
let customer;
let chanceToBuy;
let tacoChoice;
let chickenOrders;
let steakOrders;
let avocadoOrders;
let totalOrders;
let reputation;
let passersby;
let customerBuyDelay = 2000;
let newPassersbyInterval = 3000;
let startDayDelay = 5000;
let startingRep = 100;
let conversion;
let dayCounter;
let openingCountdown;
let customerImgRight;
let customerImgLeft
let noncustomerImgRight;
let noncustomerImgLeft;
let noncustomerRightArray = [];
let noncustomerLeftArray = [];
let customerRightArray = [];
let customerLeftArray = [];
let newCust;



//Food prices
let chickenTacoPrice;
let steakTacoPrice;
let avocadoTacoPrice;
let score = (conversion-.375) + ((chickenOrders*chickenTacoPrice)+(steakOrders*steakTacoPrice)+(avocadoOrders*avocadoTacoPrice))+(account-startingAccount);

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

//Inventory
let chickenInv;
let steakInv;
let avocadoInv;
let salsaInv;
let tortillaInv;

