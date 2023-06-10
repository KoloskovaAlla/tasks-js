import { alternateCase } from './alternateCase';

const dataForTests = {
  test1: {
    string: 'I like the Summer',
    resultString: 'i LIKE THE sUMMER',
  },
  test2: {
    string: 'What season do you liKe?',
    resultString: 'wHAT SEASON DO YOU LIkE?',
  },
};

describe('Change case', () => {
  it('Unit for test 1', () => {
    const { string, resultString } = dataForTests.test1;
    const alternatedCaseString = alternateCase(string);
    expect(alternatedCaseString).toEqual(resultString);
  });
  it('Unit for test 2', () => {
    const { string, resultString } = dataForTests.test2;
    const alternatedCaseString = alternateCase(string);
    expect(alternatedCaseString).toEqual(resultString);
  });
});