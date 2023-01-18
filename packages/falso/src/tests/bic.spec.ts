import { randBic } from '../lib/bic';

describe('bic', () => {
  it('should create default bic', () => {
    const result = randBic();

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
  });

  it('should throw error when provided bank code is incorrect', () => {
    const expectedError =
      'bank code should be valid 4 letters. For example DEUT';

    expect(() => randBic({ bankCode: 'X' })).toThrowError(expectedError);
    expect(() => randBic({ bankCode: 'X2222' })).toThrowError(expectedError);
  });

  it('should create bic with provided bank code', () => {
    const result = randBic({ bankCode: 'RSBN' });

    const institution = result.substring(0, 4);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(institution).toBe('RSBN');
  });

  it('should create bic with provided country code', () => {
    const result = randBic({ countryCode: 'DE' });

    const countryCode = result.substring(4, 6);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(countryCode).toBe('DE');
  });

  it('should create bic with provided location code', () => {
    const result = randBic({ locationCode: 'FF' });

    const locationCode = result.substring(6, 8);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(locationCode).toBe('FF');
  });

  it('should create bic with provided branch code', () => {
    const result = randBic({ branchCode: '120' });

    const branchCode = result.substring(8, 11);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(branchCode).toBe('120');
  });

  it('should create bic with headquarters branch code', () => {
    const result = randBic({ fillBranchCode: true });

    const branchCode = result.substring(8, 11);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(branchCode).toBe('XXX');
  });

  it('should create array of default bic codes', () => {
    const result = randBic({ length: 10 });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(11);
    expect(result[0]).not.toEqual(result[1]);
  });
});
