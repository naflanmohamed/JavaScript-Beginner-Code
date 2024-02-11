var greet1 = "Hello!";   // Double quotes
var greet2 = 'Hello!';  // Single quotes
var greet3 = `Hello!`;  // Template literals

//Differences between a template and regular string

//1.variable interpolation:

let greet = "Hello";
let place = "World";
console.log(`${greet} ${place} !`) //display both variables using template literals

//2. Multiline strings

//we can't use quotes to create a multiline string
// var p = "Hello,
// World";

var p = `Hello,
World
!
`
console.log(p);

//3. Expression evaluation

//it's possible to perform arithmetic operation inside a template literal expression
    console.log(`${1 + 1 + 1 + 1 + 1} stars!`);

//4. Tagged template literals

//a function that can be used to parse template literals with a function
function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return "Another string";
}
let message = tag`Hello ${1} World ${2}!`;
console.log(message); //Another string

//5. Escaping characters

//we can escape characters in a template literal
console.log(`\`` === '`'); //true
console.log(`\${` === '${'); //true
console.log(`\${` === '${'); //true

//6. nested template literals

//we can nest template literals inside other template literals
let nested = `Hello ${`World`}!`;
console.log(nested); //Hello World!