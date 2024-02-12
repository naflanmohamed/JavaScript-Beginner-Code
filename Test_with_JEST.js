function sum(value) {
    return value + 10;
}
module.exports = sum;

//JEST Testing

//Step 1: check if node is installed
    //open terminal and type node -version
//Step 2: check if npm is installed
    //open terminal and type npm -version

//Step 3: add a package.json file
    //open terminal and type npm init -y
        //package.json file will be created

//Step 4: install JEST
    //open terminal and type npm install --save-dev- jest

    //all the modules will be installed in node_modules folder
//Step 5: changes in package.json file scripts section
    //change the test script to jest like below
    /*"scripts": {
    "test": "jest"
  },*/

//Step 6: run the test
    //open terminal and type npm run test
    //it will run the test and show the result

//Step 7: create a test file
    //create a file with .test.js extension
    //for example Test_with_JEST.test.js

//Step 8: write the test
    //write the test in the test file
    //for example 
    /*const {defualt: TestRunner } = require("jest-runner");
const sum = require('./Test_with_JEST');

test('adds 10 to the value', () => {
    expect(sum(7)).toBe(17);
})*/


//jest runs tests for code in your current project to verify expected output


