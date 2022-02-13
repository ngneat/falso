import { randAlphaNumeric } from '../lib/alpha-numeric';

describe('randAlphaNumeric', () => {
  it('should return an alpha-numeric character', () => {
    const result: number | string = randAlphaNumeric();

    const toBeAlpha =
      typeof result === 'string' &&
      result.length === 1 &&
      result.match(/^[a-z]*$/);
    const toBeNumeric =
      typeof result === 'number' && result >= 0 && result < 10;

    expect(toBeAlpha || toBeNumeric).toBeTruthy();
  });
});
