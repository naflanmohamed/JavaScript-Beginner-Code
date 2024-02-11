/* The rest operator can be used to destructure existing array items, 
rather than typing them out again. */

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);    // a one
    console.log("b", b);    // b two
    console.log("manyMoreArgs", manyMoreArgs); 
  }
  
  myFun("one", "two", "three", "four", "five", "six");  // a one, b two, manyMoreArgs (3) ["three", "four", "five", "six"]
  
  