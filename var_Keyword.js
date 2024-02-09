//var keyword

// 1. We CAN access a var variable before initialization ...
//... as long as the var variable IS EVENTUALLY INITIALIZED
//... ANYWHERE in our code

    console.log(user);

// 2. We CAN declare and redeclare the same var variable without errors
    var user= "Mary";
    var user = "Joanna";
    var user = "Mark";

    console.log(user);

var user;