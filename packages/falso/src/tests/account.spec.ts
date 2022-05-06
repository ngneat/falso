import { randAccount } from '../lib/account';

describe('account', () => {
  it('should create default account', () => {
    const result = randAccount();

    expect(result.length).toBe(9);
    expect(typeof result).toBe('string');
  });

  it('should create array of default accounts', () => {
    const result = randAccount({ length: 10 });

    expect(result.length).toBe(10);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(9);
  });

  it('should create account with specified account length', () => {
    const result = randAccount({ accountLength: 12 });

    expect(result.length).toBe(12);
    expect(typeof result).toBe('string');
  });

  it('should create array of accounts with specified account length', () => {
    const result = randAccount({ accountLength: 14, length: 12 });

    expect(result.length).toBe(12);
    expect(Array.isArray(result)).toBe(true);
    expect(result[0].length).toBe(14);
    expect(result[0]).not.toEqual(result[1]);
  });
});
