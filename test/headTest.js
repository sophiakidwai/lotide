const assert = require('chai').assert;
const head   = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

it("returns '5' for ['5']", () => {
  assert.strictEqual(head(['5']), '5'); 
});



// const assertEqual = require('../assertEqual');
// const head = require('../head');

// assertEqual(head([]), 5);
// assertEqual(head([9, 8, 7, 6]), 9);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");