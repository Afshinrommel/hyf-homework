let fruits = ["Banana", "Orange", "Apple", "Mango","Pomelo","Salmonberry",
"Redcurrant","Purple","Rambutan","Fig"];
typeof(fruits);

 
let cars = ["Fisker","Ford","Freightliner","Fiat","FAW","Bowler","Brilliance","Bristol",
"Bufori","Brammo"]
typeof(cars);
 
let randomItem1 = fruits[Math.floor(Math.random()*fruits.length)];
console.log(randomItem1)
console.log(typeof(randomItem1));
let randomItem2 = cars[Math.floor(Math.random()*cars.length)];
console.log(randomItem2)
 
let attaached = randomItem1.concat(randomItem2);
console.log(attaached );



