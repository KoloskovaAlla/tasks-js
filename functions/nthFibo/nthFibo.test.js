import { nthFibo } from './nthFibo';

const dataForTests = {
  test1: {
    place: 4,
    expectedNumber: 2
  },
  test2: {
    place: 8,
    expectedNumber: 13
  },
  test3: {
    place: 13,
    expectedNumber: 144
  }
};

describe('numberFibonacci:', () => {
  it('Unit test 1', () => {
    const { place, expectedNumber } = dataForTests.test1;  
    const numberFibonacci = nthFibo(place);
    expect(numberFibonacci).toEqual(expectedNumber);
  });

  it('Unit test 2', () => {
    const { place, expectedNumber } = dataForTests.test2;  
    const numberFibonacci = nthFibo(place);
    expect(numberFibonacci).toEqual(expectedNumber);
  });

  it('Unit test 3', () => {
    const { place, expectedNumber } = dataForTests.test3;  
    const numberFibonacci = nthFibo(place);
    expect(numberFibonacci).toEqual(expectedNumber);
  });
});