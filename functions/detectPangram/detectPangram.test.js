import { detectPangram } from './detectPangram';

const dataForTests = {
  test1: {
    phrase: 'The quick brown fox jumps over the lazy dog',
    expectedResult: true,
  },
  test2: {
    phrase: 'The brown fox jumps over the lazy dog',
    expectedResult: false,
  },
};

describe('Detect pangram', () => {
  it('Unit test 1', () => {
    const { phrase, expectedResult } = dataForTests.test1;
    const isPangram = detectPangram(phrase);
    expect(isPangram).toEqual(expectedResult);
  });
  it('Unit test 2', () => {
    const { phrase, expectedResult } = dataForTests.test2;
    const isPangram = detectPangram(phrase);
    expect(isPangram).toEqual(expectedResult);
  });
});