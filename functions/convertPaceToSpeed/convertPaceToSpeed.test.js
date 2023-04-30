import {  convertPaceToSpeed } from './convertPaceToSpeed';

const dataForTests = {
  test1: {
    paces: [6, 5, 4],
    expectedSpeeds: [10, 12, 15]
  }
};

describe(' convertPaceToSpeed:', () => {
  it('Unit test 1', () => {
    const { paces, expectedSpeeds } = dataForTests.test1;
    const speeds = convertPaceToSpeed(paces);       
    expect(speeds).toEqual(expectedSpeeds);
  });
});
