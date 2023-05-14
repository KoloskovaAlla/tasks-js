import { closestNumber } from './closestNumber';

const dataForTests = {
  test1: {
    array: [22, 27, 43, 48],
    expectedArray: [20, 30, 40, 50]
  },
  test2: {
    array: [101, 105, 123, 129],
    expectedArray: [100, 110, 120, 130]
  },
}

describe('The closest number multiple of 10', () => {
 it ('Unit test 1', () => {
  const { array, expectedArray } = dataForTests.test1;
  const closestNumbersArrays = closestNumber(array);
  expect(closestNumbersArrays).toEqual(expectedArray);
 }),
  it ('Unit test 2', () => {
  const { array, expectedArray } = dataForTests.test2;
  const closestNumbersArrays = closestNumber(array);
  expect(closestNumbersArrays).toEqual(expectedArray);
 })
});