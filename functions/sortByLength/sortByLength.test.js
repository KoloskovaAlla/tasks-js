import { sortByLength } from './sortByLength.js';

const dataForTests = {
  test1: {
    arrayBeforeSort: [
      "Telescopes", "Glasses", "Eyes", "Monocles"
    ],
    expectedArray: ["Eyes", "Glasses", "Monocles", "Telescopes"]
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { arrayBeforeSort, expectedArray } = dataForTests.test1;
    
    const sortedArray =  sortByLength(arrayBeforeSort);
    expect(sortedArray).toEqual(expectedArray);
  })
})