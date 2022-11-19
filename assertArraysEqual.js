//Implement assertArraysEqual which will take in two arrays and console.log an appropriate message to the console.
//The message will be similar to that of assertEqual. In fact, you could refer to the code for assertEqual to help you implement this. Instead of doing a simple === check though, this assertion function will make use of your eqArrays function for array comparison.


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

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`${arr1} === ${arr2}`);
  } else {
    console.log(`${arr1} is not === to ${arr2}`);
  }
};

//TEST CODE
// return assertArraysEqual([2, 3, 4], [2, 3, 7]);