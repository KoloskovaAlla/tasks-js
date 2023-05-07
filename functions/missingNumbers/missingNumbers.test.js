import { missingNumbers } from './missingNumbers.js';

const dataForTests = {
  test1: {
    array: [
      4, 8, 6
    ],
    expectedCount: 2
  },
  test2: {
    array: [2, 9, 3, 6],    
    expectedCount: 4
  },
  test3: {
    array: [7, 2, 11, 15, 14, 4, 13, 8],    
    expectedCount: 6
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { array, expectedCount } = dataForTests.test1;    
    const count =   missingNumbers(array);
    expect(count).toEqual(expectedCount);
  });
  it('Unit test 2', () => {
    const { array, expectedCount } = dataForTests.test2;    
    const count =   missingNumbers(array);
    expect(count).toEqual(expectedCount);
  });
  it('Unit test 3', () => {
    const { array, expectedCount } = dataForTests.test3;    
    const count =   missingNumbers(array);
    expect(count).toEqual(expectedCount);
  });
});