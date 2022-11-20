//Implement assertObjectsEqual which will take in two objects and console.log an appropriate message to the console.
//The message printed to the console should be similar to that of assertArraysEqual

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;

};

const eqObjects = function(object1, object2) {
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    return false;
  }
  for (const key of object1Array) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  const object1Array = Object.keys(object1);
  const object2Array = Object.keys(object2);
  if (object1Array.length !== object2Array.length) {
    console.log((`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));

  }
  for (const key of object1Array) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        console.log((`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));
      }
    } else if (value1 !== value2) {
      console.log((`❌❌❌ Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`));
    }
  }
  console.log((`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`));
};