// functional programming

var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 1.2;

function convertCurrency (amount, rate) {
    return amount * rate;
}

currencyTwo = convertCurrency (currencyOne, exchangeRate);

console.log(currencyTwo);

function objectMaker(val){
    return{
        prop: val
    }
}

console.log(objectMaker(70));

doubleIt(10).toString();