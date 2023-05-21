import { raceCeremony } from './raceCeremony';

const dataForTests = {
  test1: {
    blocks: 11,
    expectedHeights: [4, 5, 2]
  },
  test2: {
    blocks: 6,
    expectedHeights: [2, 3, 1]
  },
  test3: {
    blocks: 10,
    expectedHeights: [4, 5, 1]
  },
}

describe('Height of the podium places:', () => {
  it('Unit test 1', () => {
    const { blocks, expectedHeights } = dataForTests.test1;
    const heights = raceCeremony(blocks);
    expect(heights).toEqual(expectedHeights);
  });
  it('Unit test 2', () => {
    const { blocks, expectedHeights } = dataForTests.test2;
    const heights = raceCeremony(blocks);
    expect(heights).toEqual(expectedHeights);
  });
  it('Unit test 3', () => {
    const { blocks, expectedHeights } = dataForTests.test3;
    const heights = raceCeremony(blocks);
    expect(heights).toEqual(expectedHeights);
  });
})