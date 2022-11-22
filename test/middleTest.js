const assertArraysEqual = require('../assertArraysEqual');
// const eqArrays = require('../eqArrays');
const middle = require('../middle');

//middle([1, 2, 3, 4, 5, 6]);

console.log(assertArraysEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));