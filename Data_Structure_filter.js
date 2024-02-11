/*It filters your arrays based on a specific test. Those array 
items that pass the test are returned.*/

const nums = [0,10,20,30,40,50];

nums.filter( function(num) {
    return num > 20;    // [30,40,50]
})


// The above code can be written as:
console.log(nums.filter( function(num) {
    return num > 20;    // [30,40,50]
}))