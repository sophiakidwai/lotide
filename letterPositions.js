const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (sentence[i] !== " ") {
      if (!results[letter]) {
        results[letter] = [i];
      } else {
        results[letter].push(i);
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("hello"));

module.exports = letterPositions;