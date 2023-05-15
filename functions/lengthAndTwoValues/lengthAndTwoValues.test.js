import { lengthAndTwoValues } from './lengthAndTwoValues';

const dataForTests = {
  test1: {
    items: {
      length: 5,
      value1: true,
      value2: false,
    },
    expectedArray: [true, false, true, false, true],
  },
  test2: {
    items: {
      length: 10,
      value1: 'blue',
      value2: 'red',
    },
    expectedArray: ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red'],
  },
  test3: {
    items: {
      length: 0,
      value1: 'one',
      value2: 'two',
    },
    expectedArray: [],
  },
};

describe('Length and two values', () => {
  it('Unit test 1', () => {
    const { items, expectedArray } = dataForTests.test1;
    const { length, value1, value2 } = items;
    const array = lengthAndTwoValues(length, value1, value2);
    expect(array).toEqual(expectedArray);
  });
});