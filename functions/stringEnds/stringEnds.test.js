import { stringEnds } from './stringEnds.js';

const dataForTests = {
  test1: {
    items: {
      string: 'Alla',
      end: 'la'
    },
    expectedResult: true
  },
  test2: {
    items: {
      string: 'abcdef',
      end: 'fe'
    },
    expectedResult: false
  },
  test3: {
    items: {
      string: 'abcdef',
      end: 'eF'
    },
    expectedResult: false
  }
}

describe('stringEnds:', () => {
  it('Unit test 1', () => {
    const { items, expectedResult } = dataForTests.test1;
    const { string, end } = items;
    const result = stringEnds(string, end);
    expect(result).toEqual(expectedResult);
  })
})