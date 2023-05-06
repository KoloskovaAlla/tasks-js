import { sumEvenNumbers } from './sumEvenNumbers.js';

const dataForTests = {
  test1: {
    array: [
      4, 3, 1, 2, 5, 10, 6, 7, 9, 8
    ],
    expectedSum: 30
  },
  test2: {
    array: [],    
    expectedSum: 0
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { array, expectedSum } = dataForTests.test1;    
    const sum =   sumEvenNumbers(array);
    expect(sum).toEqual(expectedSum);
  });
  it('Unit test 2', () => {
    const { array, expectedSum } = dataForTests.test2;    
    const sum =   sumEvenNumbers(array);
    expect(sum).toEqual(expectedSum);
  });
});