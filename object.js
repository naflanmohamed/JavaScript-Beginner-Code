var user = {}; //create an object

//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

console.log(assistantManager);
console.log(assistantManager.specialAbility);
console.log(assistantManager.rangeTilesPerTurn);

// first save an empty object literal to a variable, then use the dot notation to declare 
//new properties on the fly, and use the assignment operator to add values to those properties

var car = {}

car.color = "blue";
car.model = "BMW";
car.number = 987;

console.log(car);
console.log(car.color);

car.seats = 4;
console.log(car.seats);

//We can use brackets behalf of dot notation

var house2 = {};
house2.rooms = 3;
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

house2.widows = 7;  //we can use dot noataion with brackets notation

console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345, widows: 7}


var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}