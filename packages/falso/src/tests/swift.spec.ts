import { randSwift } from '../lib/swift';

describe('swift', () => {
  it('should create default swift', () => {
    const result = randSwift();

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
  });

  it('should create swift with provided bank code', () => {
    const result = randSwift({ bankCode: 'RSBN' });

    const bankCode = result.substring(0, 4);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(bankCode).toBe('RSBN');
  });

  it('should throw error when provided bank code is incorrect', () => {
    const expectedError =
      'bank code should be valid 4 letters. For example DEUT';

    expect(() => randSwift({ bankCode: 'X' })).toThrowError(expectedError);
    expect(() => randSwift({ bankCode: 'X2222' })).toThrowError(expectedError);
  });

  it('should create swift with provided country code', () => {
    const result = randSwift({ countryCode: 'DE' });

    const countryCode = result.substring(4, 6);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(countryCode).toBe('DE');
  });

  it('should throw error when provided country code is incorrect', () => {
    const expectedError =
      'country code should be valid ISO 3166-1 alpha-2 two-letter country code, for example: DE';

    expect(() => randSwift({ countryCode: 'X' })).toThrowError(expectedError);
    expect(() => randSwift({ countryCode: 'X222' })).toThrowError(
      expectedError
    );
  });

  it('should create swift with provided location code', () => {
    const result = randSwift({ locationCode: 'FF' });

    const locationCode = result.substring(6, 8);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(locationCode).toBe('FF');
  });

  it('should throw error when provided location code is incorrect', () => {
    const expectedError =
      'location code should be valid 2 characters, like FF or MM';

    expect(() => randSwift({ locationCode: 'X' })).toThrowError(expectedError);
    expect(() => randSwift({ locationCode: 'X22' })).toThrowError(
      expectedError
    );
  });

  it('should create swift with provided branch code', () => {
    const result = randSwift({ branchCode: '120' });

    const branchCode = result.substring(8, 11);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(branchCode).toBe('120');
  });

  it('should throw error when provided branch code is incorrect', () => {
    const expectedError =
      'branch code should be valid 3 alpha numberic characters, like XXX or 250';

    expect(() => randSwift({ branchCode: 'X2' })).toThrowError(expectedError);
    expect(() => randSwift({ branchCode: 'X222' })).toThrowError(expectedError);
  });

  it('should create swift with headquarters branch code', () => {
    const result = randSwift({ fillBranchCode: true });

    const branchCode = result.substring(8, 11);

    expect(result.length).toBe(11);
    expect(typeof result).toBe('string');
    expect(branchCode).toBe('XXX');
  });

  it('should create array of default swift codes', () => {
    const result = randSwift({ length: 10 });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(11);
    expect(result[0]).not.toEqual(result[1]);
  });
});
