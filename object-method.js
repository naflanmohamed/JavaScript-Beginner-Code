//example of adding properties and methods to an object

var car = {};
car.mileage = 98765;
car.color = "red";
console.log(car);

car.turnTheKey = function() {
    console.log("The engine is running")
}

car.lightsOn = function() {
    console.log("The lights are on.")
}

console.log(car);
car.turnTheKey();
car.lightsOn()

//undefined 
function push_break(){
    console.log("Break Pushed");
}
car.break = push_break();
console.log(car);


car.brake = function() {
    console.log("Break Pushed")
};

console.log(car);