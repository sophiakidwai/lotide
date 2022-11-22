const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  it("returns 2 for [2, 4, 6]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
});



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");