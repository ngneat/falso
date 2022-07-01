import { randOctal } from '../lib/octal';

describe('octal', () => {
  it('should create', () => {
    const octNumber = randOctal();

    expect(octNumber).toBeTruthy();
    expect(octNumber).toBeGreaterThanOrEqual(0);

    const octRegex = /[0-7]+/;
    expect(octRegex.test(octNumber.toString())).toBeTruthy();
  });

  it('should return an octa array', () => {
    const length = 5;
    const octNumbers = randOctal({ length });

    expect(Array.isArray(octNumbers)).toBe(true);
    expect(octNumbers.length).toEqual(length);
  });
});
