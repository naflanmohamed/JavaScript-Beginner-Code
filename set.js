/* Code to create a set from an array of repetitive elements 
 and print the unique elements. */

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];

const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);
