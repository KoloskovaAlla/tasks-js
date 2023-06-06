import { sumofTwo } from './sumOfTwo';

const dataForTests = {
  test1: {
    arrayAndSum: {
      array: [1, 2, 3],
      sum: 4,
    },
    expectedIndexes: [0, 2],
  },
};

describe('Indexes of items give the sum', () => {
  it('Units test 1', () => {
    const { arrayAndSum } = dataForTests.test1;
    const { array, sum } = arrayAndSum;
    const { expectedIndexes } = dataForTests.test1;
    const indexes = sumofTwo(array, sum);
    expect(indexes).toEqual(expectedIndexes);
  });
});