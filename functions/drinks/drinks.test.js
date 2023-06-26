import { drinks } from './drinks.js';

const dataForTests = {
  test1: {
    age: 37,
    expectedRecommendation: 'drink whisky',
  },
  test2: {
    age: 5,
    expectedRecommendation: 'drink toddy',
  },
  test3: {
    age: 19,
    expectedRecommendation: 'drink beer',
  },
  test4: {
    age: 16,
    expectedRecommendation: 'drink coke',
  },
}

describe('drinks:', () => {
  it('Unit test 1', () => {
    const { age, expectedRecommendation } = dataForTests.test1;    
    const recommendation = drinks(age);
    expect(recommendation).toEqual(expectedRecommendation);
  });
  it('Unit test 2', () => {
    const { age, expectedRecommendation } = dataForTests.test2;    
    const recommendation = drinks(age);
    expect(recommendation).toEqual(expectedRecommendation);
  });
  it('Unit test 3', () => {
    const { age, expectedRecommendation } = dataForTests.test3;    
    const recommendation = drinks(age);
    expect(recommendation).toEqual(expectedRecommendation);
  });
  it('Unit test 4', () => {
    const { age, expectedRecommendation } = dataForTests.test4;    
    const recommendation = drinks(age);
    expect(recommendation).toEqual(expectedRecommendation);
  });
});
