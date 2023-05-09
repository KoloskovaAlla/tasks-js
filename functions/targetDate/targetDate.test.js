import { targetDate } from './targetDate.js';

const dataForTests = {
  test1: {
    dataForCalculation: {
      startAmount: 100000,
      targetAmount: 101000,
      rate: 0.98
    },
    expectedDate: '2017-01-01'
  },
  test2: {
    dataForCalculation: {
      startAmount: 100000,
      targetAmount: 150000,
      rate: 2
    },
    expectedDate: '2035-12-26'
  }
};

describe('date', () => {
  it('Unit test 1', () => {
    const { dataForCalculation, expectedDate } = dataForTests.test1;
    const { startAmount, targetAmount, rate } = dataForCalculation;
    const date = targetDate(startAmount, targetAmount, rate);
    expect(date).toEqual(expectedDate);
  })
  it('Unit test 2', () => {
    const { dataForCalculation, expectedDate } = dataForTests.test2;
    const { startAmount, targetAmount, rate } = dataForCalculation;
    const date = targetDate(startAmount, targetAmount, rate);
    expect(date).toEqual(expectedDate);
  })
});