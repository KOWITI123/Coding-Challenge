const { processIntegerList } = require('./processList');

test('processIntegerList removes items at positions which are a multiple of 2 or 3', () => {
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const result = processIntegerList(inputList);
  expect(result).toEqual([1, 3, 5, 7, 9, 13, 17, 19]);
});
