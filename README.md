
GA WDI Project 1 - Build a game
The goal of this project was to build a playable game using the skills I had learned through the first three weeks of the GA WDI course.

Initial Planning
I knew I wanted to make a simple economy game, similar to a game I had played years ago, The Lemonade Stand. The general gameplay entails spending money to produce products for customers to buy. The game can start simple, but can also have more and more complex challenges as it progresses

Starting the Build
I first started building the games logic, simply using console logs to display the games progress. This included your intital game starting inventory and money in your accout, the frequency of customers walking past, and the likihood that they were buy. I set up functions for passersby appearing, calculating if they would buy and what they would buy, and the deduction of inventory, increase in revenue, and increase in reputation if someone did buy. After day one of working on the project, these basic game functions were visible in the console.

Next on my list was to build more structure around the game. I designed the basic game board in HTML and CSS, as well as displays for the general rules and interactions of the game including buy buttons, your current status in the game, and the costs and quantities of inventory you can buy. The buy buttons would both calculate the reduction from your account if you had enough money to buy something and add to your inventory. I also added the function of customers not buying and your reputation reducing if you did not have the inventory to make the taco they wanted. I also implimented a splash screen that would appear at the start of the game and the start of each day. It would display the rules on the first day, then display your score at the end of each day. Also adding to the structure of the game, I was able to create a progress bar that would progress with the length of each day - a day being a milestone or level of the game.

The third major step of the game was creating the visuals. I used two different images for the street and the truck and used online tools to overlay them to create my taco truck scene. Then I found a nice gif of a walking pedestrian, which turned out to be a dog. I had to make several modiifcation to the gif to make it fit all the needs of my game:
1. I needed to move the image across the screen to make it look like he is walking
2. I needed to reverse it so he could walk the other direction
3. I needed to make him stop at the tuck, so become a single frame instead of a gif
4. I needed to add a taco in his mouth after he would buy (I had to do this frame by frame of the gif and seperately for each direction he could move)
5. I needed to add a speech bubble to the single frame image so could order a taco

Getting the images of each customer to behave appropriately turned out to be one of the biggest challenges of the project. I had issues with the images not reacting as intended in terms of walking at the correct time, buying or not buying appropriately, and appearing consistently and correctly on the screen. The final solution to this problem was to make each customer a JS object, assign the object properties that would guide his buying and moving behavior, push the object into an array, then iterate through the array to get the customers to perform their actions correctly at the correct time.

Game Parameters
The gameplay is highly adjustable in terms of how interactive and how challenging the game can be. Some of the final changes I made before the in class presentation was to set the parameters of the game to be tough, fast, and fun out of the parameters I was using that were more useful for test running the game.

Things Left To Do
There is still a lot left to do to make this game match my intial vision. The game needs some general stucture including losing screen, a restart game function, and an improved scoring system and end0-of-day screen. 

It could definitely use improved styling to make the game better looking, more responsive on mobile, and have the interaction (buy buttons) more obvious, responsive, and usable.

I am also planning on adding depth to the game mechanics. I want to make the taco prices adjustable which will play into your reputation and the chance to buy. I want to adjustability to the quantities of inventory you can buy, so you can parse it or buy in bulk, and I want to add a advertising component, which will increase the chance to buy at a cost.

Built With
Javascript
HTML
CSS