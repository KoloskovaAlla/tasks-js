import { printerErrors } from './printerErrors';

const dataForTests = {
  test1: {
    string: "aaaxbbbbyyhwawiwjjjwwm",
    expectedNumbersOfErrors: '8 / 22',
  }
}

describe('printerErrors:', () => {
  it('Unit test 1', () => {
    const { string, expectedNumbersOfErrors } = dataForTests.test1;
    const errors = printerErrors(string);
    expect(errors).toEqual(expectedNumbersOfErrors);
  });
});