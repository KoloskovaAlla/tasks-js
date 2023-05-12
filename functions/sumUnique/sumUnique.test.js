import { sumUnique } from './sumUnique.js';

const dataForTests = {
  test1: {
  list: [3, 4, 6, 3],
  expectedSum: 10,
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { list, expectedSum } = dataForTests.test1;    
    const sum = sumUnique(list);
    expect(sum).toEqual(expectedSum);
  });
});