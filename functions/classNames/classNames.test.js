import { classNames } from './classNames.js';

const dataForTests = {
  test1: {
    classItems: {
      argString: 'one',
      argObject: { two: true },
      argArray: ['three']
    },
    expectedClassString: 'one two three'
  }
}

describe('classNames:', () => {
  it('Unit test 1', () => {
    const { classItems, expectedClassString } = dataForTests.test1;
    const { argString, argObject, argArray } = classItems;
    const classString = classNames(argString, argObject, argArray);
    expect(classString).toEqual(expectedClassString);
  })
})