// charAt() 
// concat() 
// indexOf() 
// lastIndexOf() 
// split() 
// toUpperCase() 
// toLowerCase()  
// toLowerCase()  

var fruits = "apple";

for(var i=0;i<fruits.length; i++){
    console.log(fruits[i]);
}

//concat
var greeting = "Hello ";
var name = "Lisa";

//console.log(greeting.pop());    //error
console.log(greeting + name);
console.log(greeting.concat(name));

console.log(greeting.charAt(0)) //'H'

var name_2 = "Wo".concat("rl").concat("d"); // 'World'
console.log(name_2);

//Search Position
var index = "ho-ho-ho".indexOf('o'); // 1 , it'll show first position that matches a character:
console.log(index);

//Split
var split = "ho-ho-ho".split("-"); // ['ho', 'ho', 'ho'] 
console.log(split);

//toUpperCase
var UpperCase = greeting.toUpperCase(); // "HELLO, "
console.log(UpperCase);

//toLowerCase
var LowerCase = greeting.toLowerCase(); // "hello, "
console.log(LowerCase);