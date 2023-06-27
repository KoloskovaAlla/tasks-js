import { formatNumberWithCommas } from './formatNumberWithCommas.js';

const dataForTests = {
  test1: {
    number: 6785454538537584,
    expectedFormatNumber: '6,785,454,538,537,584',
  }
}

describe('formatNumberWithCommas:', () => {
  it('Unit test 1', () => {
    const { number, expectedFormatNumber } = dataForTests.test1;    
    const formatNumber = formatNumberWithCommas(number);
    expect(formatNumber).toEqual(expectedFormatNumber);
  })
})