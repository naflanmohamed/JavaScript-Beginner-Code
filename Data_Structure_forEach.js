const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruits,index){
    console(`${index}. ${fruits}`);
}
fruits.forEach(appendIndex);