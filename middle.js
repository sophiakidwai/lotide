// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;

// };

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2)) {
//     console.log(`${arr1} === ${arr2}`);
//   } else {
//     console.log(`${arr1} is not === to ${arr2}`);
//   }
// };

//const eqArrays = require('../eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
    
  } else if (array.length % 2 !== 0) {
    let result = [];
    let middleIndex = (Math.floor((array.length) / 2));
    result.push(array[middleIndex]);
    return result;

  } else {
    let result = [];
    let middleIndex2 = (Math.floor((array.length) / 2));
    // length of the array divided by 2, and then rounded down to a whole number
    let middleIndex1 = (Math.floor((array.length) / 2) - 1);
    // length of the array divided by 2, and then rounded down to a whole number, then subtracted 1 to get the index before
    result.push(array[middleIndex1]);
    result.push(array[middleIndex2]);
    return result;
  }
};

module.exports = middle;

//console.log(middle([1, 2, 3, 4, 5, 6]));