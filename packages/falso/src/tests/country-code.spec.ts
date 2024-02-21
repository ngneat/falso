import { randCountryCode } from '../lib/country-code';

describe('countryCode', () => {
  it('should create default country code', () => {
    const result = randCountryCode();

    expect(result.length).toBe(2);
    expect(typeof result).toBe('string');
  });

  it('should create default country code using alpha-3 syntax', () => {
    const result = randCountryCode({ alpha3: true });

    expect(result.length).toBe(3);
    expect(typeof result).toBe('string');
  });

  it('should create array of default country codes', () => {
    const result = randCountryCode({ length: 10 });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(2);
    expect(result[0]).not.toEqual(result[1]);
  });

  it('should create array of alpha3 country codes', () => {
    const result = randCountryCode({ length: 10, alpha3: true });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(3);
    expect(result[0]).not.toEqual(result[1]);
  });
});
