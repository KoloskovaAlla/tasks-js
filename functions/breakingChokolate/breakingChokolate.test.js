import {  breakingChokolate } from './breakingChokolate.js';

const dataForTests = {
  test1: {
    sizes: {
      length: 6,
      width: 5
    },
    expectedBreaks: 29
  },
  test2: {
    sizes: {
      length: 20,
      width: 17
    },
    expectedBreaks: 339
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { sizes, expectedBreaks } = dataForTests.test1;
    const {width, length } = sizes;
    const breaks = breakingChokolate(length, width)
    expect(breaks).toEqual(expectedBreaks);
  });
  it('Unit test 2', () => {
    const { sizes, expectedBreaks } = dataForTests.test2;
    const {width, length } = sizes;
    const breaks = breakingChokolate(length, width)
    expect(breaks).toEqual(expectedBreaks);
  });
})