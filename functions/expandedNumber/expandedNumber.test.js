import { expandedNumber } from './expandedNumber';

const dataForTests = {
  test1: {
    number: '724',
    expectedForm: '700 + 20 + 4'
  },
  test2: {
    number: '70304',
    expectedForm: '70000 + 300 + 4'
  }
};

describe('expandedNumber:', () => {
  it('Unit test 1', () => {
    const { number, expectedForm } = dataForTests.test1;  
    const expandedFormOfNumber = expandedNumber(number);
    expect(expandedFormOfNumber).toEqual(expectedForm);
  });
  it('Unit test 2', () => {
    const { number, expectedForm } = dataForTests.test2;  
    const expandedFormOfNumber = expandedNumber(number);
    expect(expandedFormOfNumber).toEqual(expectedForm);
  });
});