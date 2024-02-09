console.log(new Date());    //built in Constructor

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

console.log(kiwiIcecream); // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
console.log(appleIcecream); // --> Icecream {flavor: 'apple', meltIt: ƒ}

let apple = new String("Apple");
console.log(apple);

//built-in constructor.

// new Date();
// new Error();
// new Map();
// new Promise();
// new Set();
// new WeakSet();
// new WeakMap();