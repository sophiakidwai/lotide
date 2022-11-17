const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }

};

const findKeyByval = function(object, val) {
  for (const property in object) {
    if (object[property] === val) {
      return property;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByval(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByval(bestTVShowsByGenre, "That '70s Show"), undefined);
