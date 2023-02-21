import { powersOfTwo } from './powersOfTwo.js';

const dataForTests = {
  test1: {
    power: 5,
    expectedArray: [1, 2, 4, 8, 16, 32]
  },
  test2: {
    power: 7,
    expectedArray: [1, 2, 4, 8, 16, 32, 64, 128]
  }
};

describe('powersOfTwo:', () => {
  it('Unit test 1', () => {
    const { power, expectedArray } = dataForTests.test1;
    const powersOfTwoArr = powersOfTwo(power);
    expect(powersOfTwoArr).toEqual(expectedArray);
  });

  it('Unit test 2', () => {
    const { power, expectedArray } = dataForTests.test2;
    const powersOfTwoArr = powersOfTwo(power);
    expect(powersOfTwoArr).toEqual(expectedArray);
  });
});