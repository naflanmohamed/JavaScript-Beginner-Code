//for of loop cannot work on an object directly. It can only work on an array or a string.
/*
const car = {
    speed: 100,
    color: "blue"
}
for(prop of car) {
    console.log(prop)
} 
*/

//for loop can work on an array directly
const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//Object defualt method
const car2 = {
    speed: 200,
    color: "red"
}
//Object.keys()
console.log(Object.keys(car2)); // ['speed','color']
//Object.values()
console.log(Object.values(car2)); // [200,'red']
//Object.entries()
console.log(Object.entries(car2)); // [['speed',200],['color','red']]

//loop over any object's own property keys and values
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

//access an object's member using the brackets notation. 

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

