import { distanceBetweenTwoPoints } from './distanceBetweenTwoPoints';

const dataForTests = {
  test1: {
    points: {
      pointA: { x: 1, y:3 },
      pointB: { x: 5, y:6 }
    },
    expectedDistance: 5
  }
};

describe('distanceBetweenTwoPoints:', () => {
  it('Unit test 1', () => {
    const { points, expectedDistance } = dataForTests.test1;
    const { pointA, pointB} = points;
    const distance = distanceBetweenTwoPoints(pointA, pointB);   
    
    expect(distance).toEqual(expectedDistance);    
  });
});