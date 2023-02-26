import { recursionFibo } from './recursionFibo';

const dataForTests = {
  test1: {
    place: 4,
    expectedFiboNum: 2
  },
  test2: {
    place: 8,
    expectedFiboNum: 13
  },
  test3: {
    place: 13,
    expectedFiboNum: 144
  }
};

describe('numberFibonacci:', () => {
  it('Unit test 1', () => {
    const { place, expectedFiboNum } = dataForTests.test1;  
    const fiboNum = recursionFibo(place);
    expect(fiboNum).toEqual(expectedFiboNum);
  });

  it('Unit test 2', () => {
    const { place, expectedFiboNum } = dataForTests.test2;  
    const fiboNum = recursionFibo(place);
    expect(fiboNum).toEqual(expectedFiboNum);
  });

  it('Unit test 3', () => {
    const { place, expectedFiboNum } = dataForTests.test3;  
    const fiboNum = recursionFibo(place);
    expect(fiboNum).toEqual(expectedFiboNum);
  });
});