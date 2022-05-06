import { randIban } from '../lib/iban';

describe('iban', () => {
  it('should create default iban', () => {
    const result = randIban();

    expect(result.length).toBeGreaterThanOrEqual(16);
    expect(result.length).toBeLessThanOrEqual(34);
    expect(typeof result).toBe('string');
  });

  it('should create iban with provided country code', () => {
    const result = randIban({ countryCode: 'DE' });

    const countryCode = result.substring(0, 2);

    expect(result.length).toBeGreaterThanOrEqual(16);
    expect(result.length).toBeLessThanOrEqual(34);
    expect(typeof result).toBe('string');
    expect(countryCode).toBe('DE');
  });

  it('should throw error when provided country code is incorrect', () => {
    const expectedError =
      'country code should be valid ISO 3166-1 alpha-2 two-letter country code, for example: DE';

    expect(() => randIban({ countryCode: 'X' })).toThrowError(expectedError);
    expect(() => randIban({ countryCode: 'X222' })).toThrowError(expectedError);
  });

  it('should create array of default ibans', () => {
    const result = randIban({ length: 10 });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBeGreaterThanOrEqual(16);
    expect(result[0].length).toBeLessThanOrEqual(34);
    expect(result[0]).not.toEqual(result[1]);
  });
});
