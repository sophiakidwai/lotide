const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚💚Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

let head = function(array) {
  let first = array[0];
  return first;
};

assertEqual(head([]), 5);
assertEqual(head([9, 8, 7, 6]), 9);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");