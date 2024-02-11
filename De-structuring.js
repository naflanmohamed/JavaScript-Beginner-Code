let {PI} = Math;
console.log(PI); // 3.141592653589793

let {pi} = Math;
console.log(pi); // undefined

PI === Math.PI; // true
console.log(PI === Math.PI); // true

PI = 1;
console.log(PI === Math.PI); // false

pi === Math.PI; // false
console.log(pi === Math.PI); // false

