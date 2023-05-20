import { compareProbabilities } from './compareProbabilities';

const dataforTests =  {
  test1: {
    probabilities: {
      probabibility1: '1:3',
      probabibility2: '1:4'
    },
    expectedResult: true
  },
  test2: {
    probabilities: {
      probabibility1: '1:3',
      probabibility2: '1:2'
    },
    expectedResult: false
  },
};

describe('Compare probabilities', () => {
  it('Unit test 1', () => {
    const { probabilities, expectedResult } = dataforTests.test1;
    const { probabibility1, probabibility2 } = probabilities;
    const result = compareProbabilities(probabibility1, probabibility2);
    expect(result).toEqual(expectedResult);
  });
  it('Unit test 2', () => {
    const { probabilities, expectedResult } = dataforTests.test2;
    const { probabibility1, probabibility2 } = probabilities;
    const result = compareProbabilities(probabibility1, probabibility2);
    expect(result).toEqual(expectedResult);
  });
});
