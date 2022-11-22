//countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.
//The function should report back how many instances of each string were found in the allItems array of strings
//Our function countOnly needs to return a proper report on all the strings found in the input array, and their respective counts. Therefore it will need to return an object that can represent the stats.

const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};

// const firstNames = [
//   "Karl",
//   "Salima",
//   "Agouhanna",
//   "Fang",
//   "Kavith",
//   "Jason",
//   "Salima",
//   "Fang",
//   "Joe"
// ];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

// // assertEqual(result1["Jason"], 1);
// // assertEqual(result1["Karima"], undefined);
// // assertEqual(result1["Fang"], 2);

module.exports = countOnly;