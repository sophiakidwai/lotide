const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [8] for [7, 8, 9]", () => {
    assert.deepEqual(middle([7, 8, 9]), [8]);
  });
  it('returns ["Lighthouse"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Lighthouse"]);
  });
});

// console.log(assertArraysEqual(middle(["tom", "dick", "harry", "james", "susan"]), ["harry"]));
// console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));