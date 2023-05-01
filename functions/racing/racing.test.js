import { racing } from './racing';

const dataForTests = {
  test1: {
    racingItems: {
      v1: 720,
      v2: 850,
      S: 70,
    },
    expectedTime: [0, 32, 18]
  }
}

describe('racing:', () => {
  it('Unit test 1', () => {
    const { racingItems, expectedTime } = dataForTests.test1;
    const { v1, v2, S } = racingItems;
    const time = racing(v1, v2, S)
    expect(time).toEqual(expectedTime);
  });
});