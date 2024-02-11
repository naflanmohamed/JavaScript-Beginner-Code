const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruits,index){
    console.log(`${index}. ${fruits}`);
}
fruits.forEach(appendIndex);

console.log('-------------------');

const veggies = ['onion', 'garlic', 'potato'];

veggies.forEach( function(veggie, index_1) {
    console.log(`${index_1}. ${veggie}`);
});


const result = [];

const school = {
    schoolName: 'Fake School',
    location: '123 Fake St',
    established: 1999,
}
const schoolKey = Object.keys(school);  // Object.keys() returns an array of a given object's own property names, in the same order as we get with a normal loop.

schoolKey.forEach( function(key) {      // forEach() method executes a provided function once for each array element.
    result.push(key, school[key])       // push() method adds new items to the end of an array, and returns the new length.
})

console.log(result)