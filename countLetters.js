const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥰🥰🥰Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(str){
  let result = {};
  for (letter of str){
    if (letter !== ' ') {
      if (!result[letter]) {
      result[letter] = 1;
      } else {
        result[letter]++;
      }
    }
  }
return result;
}

console.log(countLetters("My name is Sophia"));