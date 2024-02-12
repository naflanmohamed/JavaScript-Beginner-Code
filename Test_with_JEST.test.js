const {defualt: TestRunner } = require("jest-runner");
const sum = require('./Test_with_JEST');

test('adds 10 to the value', () => {
    expect(sum(7)).toBe(17);
})