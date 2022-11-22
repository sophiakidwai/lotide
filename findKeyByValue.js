const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`)
  } else if (actual !== expected){
  console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};


//const assertEqual = require('./assertEqual');

const findKeyByvalue = function(object, val) {
  let result = undefined;
  for (const property in object) {
    if (object[property] === val) {
      result = `${property}`;
    }
  }
  return result;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByvalue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByvalue(bestTVShowsByGenre, "That '70s Show"), undefined);


//module.exports = findKeyByvalue

