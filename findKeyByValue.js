const assertEqual = require('./assertEqual');

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

// assertEqual(findKeyByval(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByval(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByvalue

