import { targetDateAdvanced } from './targetDateAdvanced.js';

const dataForTests = {
  test1: {
    dataForCalculation: {
      startAmount: 100000,
      targetAmount: 150000,
      rate: 9,
      startedDate: '2023-05-12'
    },
    expectedDate: '2027-10-21'
  } 
};

describe('date', () => {
  it('Unit test 1', () => {
    const { dataForCalculation, expectedDate } = dataForTests.test1;
    const { startAmount, targetAmount, rate, startedDate } = dataForCalculation;
    const date =  targetDateAdvanced(startAmount, targetAmount, rate, startedDate);
    expect(date).toEqual(expectedDate);
  }) 
});
