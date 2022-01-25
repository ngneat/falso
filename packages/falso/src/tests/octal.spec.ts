import { randOctal } from '../lib/octal';

describe('octal', () => {
  it('should create', () => {
    const octNumber = randOctal();

    expect(octNumber).toBeTruthy();
    expect(octNumber).toBeGreaterThanOrEqual(0);

    const octRegex = /[0-7]+/;
    expect(octRegex.test(octNumber.toString())).toBeTruthy();
  });
});
