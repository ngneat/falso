import { randAbn } from '../lib/abn';
import { isValidAbn } from '../lib/core/validators';

describe('randAbn', () => {
  it('should return a random ABN', () => {
    const abn = randAbn();
    expect(typeof abn).toBe('string');
  });

  it('should be 11 digits', () => {
    const abn = randAbn();
    expect(abn.length).toBe(11);
  });

  it('should return a valid ABN', () => {
    const abn = randAbn({ onlyValid: true });
    expect(typeof abn).toBe('string');
    expect(isValidAbn(abn)).toBe(true);
  });
});

describe('isValidAbn', () => {
  it('should return false on an invalid ABN', () => {
    const result = isValidAbn('51824753554');
    expect(result).toBe(false);
  });
  it('should ignore spaces on an invalid ABN', () => {
    const result = isValidAbn('51 824 753 554');
    expect(result).toBe(false);
  });
  it('should ignore spaces on a valid ABN', () => {
    const result = isValidAbn('51 824 753 556');
    expect(result).toBe(true);
  });
  it('should return true on a valid ABN', () => {
    const result = isValidAbn('50110219460');
    expect(result).toBe(true);
  });
});
