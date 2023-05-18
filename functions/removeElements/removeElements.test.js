import { declareClass } from '../../../../Users/Алла/AppData/Local/Microsoft/TypeScript/5.0/node_modules/@babel/types/lib/index';
import { removeElements } from './removeElements';

const dataForTests = {
  test1: {
    arraysForCalculation: {
      fullArray: [1, 1, 2, 3, 1, 2, 3, 4],
      removableArray: [1, 3],
    },
    expectedArray: [2, 2, 4],
  },
  test2: {
    arraysForCalculation: {
      fullArray: [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8],
      removableArray: [1, 3, 4, 2],
    },
    expectedArray: [5, 6, 7, 8],
  },
  test3: {
    arraysForCalculation: {
      fullArray: [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3],
      removableArray: [2, 4, 3],
    },
    expectedArray: [8, 7, 6, 5, 1],
  },
};

describe('Remove All The Marked Elements of a List', () => {
  it('Unit test 1', () => {
    const { arraysForCalculation, expectedArray } = dataForTests.test1;
    const { fullArray, removableArray } = arraysForCalculation;
    const resultArray = removeElements(fullArray, removableArray);
    expect(resultArray).toEqual(expectedArray);
  });
  it('Unit test 2', () => {
    const { arraysForCalculation, expectedArray } = dataForTests.test2;
    const { fullArray, removableArray } = arraysForCalculation;
    const resultArray = removeElements(fullArray, removableArray);
    expect(resultArray).toEqual(expectedArray);
  });
  it('Unit test 3', () => {
    const { arraysForCalculation, expectedArray } = dataForTests.test3;
    const { fullArray, removableArray } = arraysForCalculation;
    const resultArray = removeElements(fullArray, removableArray);
    expect(resultArray).toEqual(expectedArray);
  });
});
