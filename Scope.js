var globalVar = "I'm in the global scope";      //Gobal Scope

function scopeTest() {
    var localVar = "I'm scoped to the function";    //Local Scope
    console.log(globalVar);
}

scopeTest();
