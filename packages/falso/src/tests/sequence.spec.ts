import { randSequence } from '../lib/sequence';

describe('randSequence', () => {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const specials = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';

  it('should create one sequence', () => {
    expect(typeof randSequence()).toBe('string');
    expect(randSequence().length).toBe(8);
  });

  it('should create array of sequences', () => {
    const result = randSequence({ length: 10 });

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(10);
    expect(result[0].length).toBe(10);
    expect(result[0]).not.toEqual(result[1]);
  });

  it('should create one sequence with char pattern', () => {
    const result = randSequence({ chars: 'ABCD', size: 10 });

    expect(typeof result).toBe('string');
    expect(result.length).toBe(10);
    if (typeof result === 'string') {
      expect(result.split('').some((char) => letters.includes(char))).toBe(
        true
      );
    }
  });

  it('should create sequence with charType: alpha', () => {
    const result = randSequence({ charType: 'alpha', size: 10 });

    expect(result.length).toBe(10);
    expect(typeof result).toBe('string');
    if (typeof result === 'string') {
      expect(
        result.split('').some((char) => numbers.includes(parseInt(char)))
      ).toBe(false);
    }
  });

  it('should create sequence with charType: alphaNumeric', () => {
    const result = randSequence({ charType: 'alphaNumeric' });

    expect(result.length).toBe(8);
    expect(typeof result).toBe('string');
  });

  it('should create sequence with charType: numeric', () => {
    const result = randSequence({ charType: 'numeric' });

    expect(result.length).toBe(8);
    expect(typeof result).toBe('string');
    if (typeof result === 'string') {
      expect(result.split('').some((char) => letters.includes(char))).toBe(
        false
      );
    }
  });

  it('should create sequence with charType: special', () => {
    const result = randSequence({ charType: 'special' });

    expect(result.length).toBe(8);
    expect(typeof result).toBe('string');
    if (typeof result === 'string') {
      expect(result.split('').some((char) => letters.includes(char))).toBe(
        false
      );
      expect(result.split('').every((char) => specials.includes(char))).toBe(
        true
      );
    }
  });
});
