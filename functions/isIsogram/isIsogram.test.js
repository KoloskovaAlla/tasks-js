import { isIsogram } from './isIsogram';

const dataForTests = {
  test1: {
    string: 'Alla',
    expectedIsIsogram: false,
  },
  test2: {
    string: 'Fedya',
    expectedIsIsogram: true,
  },

};

describe('isIsogram:', () => {
  it('Unit test 1', () => {
    const { string, expectedIsIsogram } = dataForTests.test1;
    const result = isIsogram(string);
    expect(result).toEqual(expectedIsIsogram);
  });
  it('Unit test 2', () => {
    const { string, expectedIsIsogram } = dataForTests.test2;
    const result = isIsogram(string);
    expect(result).toEqual(expectedIsIsogram);
  });



});