// const keyword

// 1. The const variable MUST BE INITIALIZED
    
    // console.log(user); // Error!
    // const user;

// 2. We CAN'T access the const variable before initialization

    // console.log(user); // Unexpected token error
    // const user = "Andrew";

// 3. We CAN'T redeclare a const variable
        // const user;
    // user = "Anna";

    //This Will work
    const user = "Andrew";
    console.log(user); 
    