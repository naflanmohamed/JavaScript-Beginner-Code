/*map() method creates a new array with the results of calling a 
provided function on every element in the calling array. */

[0,20,40,60,80].map( function(num) {
    return num / 10
})

// The above code can be written as:
console.log([0,20,40,60,80].map( function(num) {
    return num / 10
}))