//Tools used to spread array items and join Objects together 

//Join Arrays
const car = ['BMW', 'Audi', 'Mercedes', 'Toyota'];
const bike = ['Harley', 'Ducati', 'Honda', 'Kawasaki'];

const vehicles = [...car, ...bike]; // combining two arrays
console.log(vehicles);  // ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Harley', 'Ducati', 'Honda', 'Kawasaki']

console.log("-------------------");

//Join Objects
const car1 = {
    speed: 200,
    
}
const car2 = {
    color: "blue",
    model: "BMW"
}

const car3 = {...car1, ...car2}; // combining two objects
console.log(car3); // {speed: 200, color: "blue", model: "BMW"}

console.log("-------------------");

//Spread Operator push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];

console.log(veggies);

console.log("-------------------");

//Spread Operator with Strings
const greeting = "Hello";
const arrayOfChars = [...greeting];

console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

console.log("-------------------");

//Copy either an object or an array into a separate one
const cycle1 = {
    speed: 200,
    color: 'yellow'
}
const cycle2 = {...car1}; // copy cycle1 into cycle2

cycle1.speed = 201

console.log(cycle1.speed, cycle2.speed) // 201 200

console.log("-------------------");

//You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop();

console.log(fruits1, "not", fruits2);