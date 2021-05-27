// Write unit tests!
const pad = require("./padArray");

test('one', () => {
  expect(pad([1,2,3], 5)).toEqual([1,2,3,'None','None']);
});

test('two', () => {
  expect(pad([1,2,3], 5, 'apple')).toEqual([1,2,3,'apple', 'apple']);
});
