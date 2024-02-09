var array = [1,2,3,4,5,6];

console.log(array[0]);
console.log(array[4]);

var name = ["john", "mark", 'mar'];

console.log(name[0]);

//iterate array using function

function myarr(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(i, arr[i]);
    }
}

var arr = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

myarr(arr);

