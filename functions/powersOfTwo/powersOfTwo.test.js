import { powersOfTwo } from './powersOfTwo.js'; 
 
const dataForTests = { 
  test1: { 
    power: 5, 
    expectedArray: [ 1, 2, 4, 8, 16, 32 ] 
  } 
}; 
 
describe('powersOfTwo:', () => { 
  it('Unit test 1', () => { 
    const { power, expectedArray } = dataForTests.test1; 
    const powersOfTwoArr = powersOfTwo(power) 
    expect(powersOfTwoArr).toEqual(expectedArray); 
  }); 
});