//map is a collection of elements where each element is stored as a Key, value pair.
//The key can be of any type. The value can also be of any type.
let bestRacer = new Map();

bestRacer.set(1, "The Champion");
bestRacer.set(2, "The Runner-up");
bestRacer.set(3, "The third place");

console.log(bestRacer);

//To get a specific value,
console.log(bestRacer.get(1));