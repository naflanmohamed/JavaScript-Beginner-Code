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