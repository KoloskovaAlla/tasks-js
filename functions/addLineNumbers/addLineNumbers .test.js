import { addLineNumbers } from './addLineNumbers';

const dataForTests = {
  test1: {
    array: ['a', 'b', 'c'],
    expectedArray: ['1: a', '2: b', '3: c']
  },
  test2: {
    array: [],
    expectedArray: []
  },
};

describe('Add line numbers:', () => {
  it('Unit test 1', () => {
    const { array, expectedArray } = dataForTests.test1;
    const numberedLines = addLineNumbers(array);
    expect(numberedLines).toEqual(expectedArray);
  });
    it('Unit test 2', () => {
    const { array, expectedArray } = dataForTests.test2;
    const numberedLines = addLineNumbers(array);
    expect(numberedLines).toEqual(expectedArray);
  });
});