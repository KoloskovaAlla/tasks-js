import { rotate } from './rotate.js';

const dataForTests = {
  test1: {
    string: '12345',
    expectedRotation: [ '23451', '34512', '45123', '51234', '12345' ],
  },
}

describe('rotate:', () => {
  it('Unit test 1', () => {
    const { string, expectedRotation } = dataForTests.test1;    
    const rotation = rotate(string)
    expect(rotation).toEqual(expectedRotation);
  });
});