import { generateAcronym } from './generateAcronym';

const dataForTests = {
  test1: {
    string: 'have a nice day',
    expectedAcronym: 'HAND',
  },
  test2: {
    string: 'kiss On the cheek',
    expectedAcronym: 'KOTC',
  },
  test3: {
    string: 'Just kidding',
    expectedAcronym: 'JK',
  }
};

describe('Generate Acronym', () => {
  it('Unit test 1', () => {
    const { string, expectedAcronym } = dataForTests.test1;
    const acronym = generateAcronym(string);
    expect(acronym).toEqual(expectedAcronym);
  });
  it('Unit test 2', () => {
    const { string, expectedAcronym } = dataForTests.test2;
    const acronym = generateAcronym(string);
    expect(acronym).toEqual(expectedAcronym);
  });
  it('Unit test 3', () => {
    const { string, expectedAcronym } = dataForTests.test3;
    const acronym = generateAcronym(string);
    expect(acronym).toEqual(expectedAcronym);
  });

});