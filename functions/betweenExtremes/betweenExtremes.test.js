import { betweenExtremes } from './betweenExtremes.js';

const dataForTests = {
  test1: {
    array: [
      1, 434, 555, 34, 112
    ],
    expectedDifference: 554
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { array, expectedDifference } = dataForTests.test1;
    const diffenrence = betweenExtremes(array);
    expect(diffenrence).toEqual(expectedDifference);
  });
});