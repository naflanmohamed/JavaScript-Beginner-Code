//Push - for insert to array form index 0
//Pop - for delete from array from last index

var car = [];
car.push("BMW");
car.push("Audi");
car.push("Benz");

console.log(car);

var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
fruits.push('banana');

fruits.pop();   //pop method will delete last entry

console.log(fruits);   

//fuction 

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}

arrayBuilder('apple', 'pear', 'plum'); // ['apple', 'pear', 'plum']

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;         //I choose return for console.log
}

var simpleArr = arrayBuilder('apple', 'pear', 'plum');


console.log(simpleArr);
