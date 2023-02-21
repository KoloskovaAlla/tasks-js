import { powersOfTwo } from './powersOfTwo.js';

const dataForTests = {
  test1: {
    indicator: 5,
    expectedArray: [1, 2, 4, 8, 16, 32]
  },
  test2: {
    indicator: 7,
    expectedArray: [1, 2, 4, 8, 16, 32, 64, 128]
  }
};

describe('powersOfTwo:', () => {
  it('Unit test 1', () => {
    const { indicator, expectedArray } = dataForTests.test1;
    const powersOfTwoArr = powersOfTwo(indicator);
    expect(powersOfTwoArr).toEqual(expectedArray);
  });

  it('Unit test 2', () => {
    const { indicator, expectedArray } = dataForTests.test2;
    const powersOfTwoArr = powersOfTwo(indicator);
    expect(powersOfTwoArr).toEqual(expectedArray);
  });
});