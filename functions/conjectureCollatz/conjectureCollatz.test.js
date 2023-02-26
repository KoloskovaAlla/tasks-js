import { conjectureCollatz } from './conjectureCollatz';

const dataForTests = {
  test1: {
    num: 11,
    expectedRow: [11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
  },
  test2: {
    num: 13,
    expectedRow: [13, 40, 20, 10, 5, 16, 8, 4, 2, 1]
  },
  test3: {
    num: 320,
    expectedRow: [320, 160, 80, 40, 20, 10, 5, 16, 8, 4, 2, 1]
  },
  test4: {
    num: 20,
    expectedRow: [20, 10, 5, 16, 8, 4, 2, 1 ]
  }
};

describe(' conjectureCollatz:', () => {
  it('Unit test 1', () => {
    const { num, expectedRow } = dataForTests.test1;    
    const row = conjectureCollatz(num);
    expect(row).toEqual(expectedRow);
  });

  it('Unit test 2', () => {
    const { num, expectedRow } = dataForTests.test2;    
    const row = conjectureCollatz(num);
    expect(row).toEqual(expectedRow);
  });

  it('Unit test 3', () => {
    const { num, expectedRow } = dataForTests.test3;    
    const row = conjectureCollatz(num);
    expect(row).toEqual(expectedRow);
  });

  it('Unit test 4', () => {
    const { num, expectedRow } = dataForTests.test4;    
    const row = conjectureCollatz(num);
    expect(row).toEqual(expectedRow);
  });
});