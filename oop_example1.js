var purchase1  ={
    shoes: 100,
    tax: 1.2,
    totalPrice: function(){
        var cal = purchase1.shoes * purchase1.tax;
        console.log("Total Price: ", cal);
    }
}

purchase1.totalPrice();
console.log(purchase1.shoes);
console.log(purchase1.tax);


var purchase2  ={
    shoes: 50,
    tax: 0.9,
    totalPrice: function(){
        var cal = this.shoes * this.tax;    //here used this keyword
        console.log("Total Price: ", cal);
    }
}

purchase2.totalPrice();