import { randSequence } from '../lib/sequence';

const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const specials = '<>@!#$%^&*()_+[]{}?:;|\'"\\,./~`-=';

describe('randSequence', () => {
  // Test Default Behavior
  it('should generate a string of default length 8 with default chars', () => {
    const result = randSequence();
    expect(result).toHaveLength(8); // Default length should be 8
    expect(typeof result).toBe('string'); // Result should be a string
  });

  // Test with 'numeric' charType
  it('should generate a string with numeric characters when charType is "numeric"', () => {
    const result = randSequence({ charType: 'numeric' });
    expect(result).toHaveLength(8); // Default size
    expect(result).toMatch(/^\d+$/); // Result should only contain digits
  });

  // Test with 'alpha' charType
  it('should generate a string with alphabetic characters when charType is "alpha"', () => {
    const result = randSequence({ charType: 'alpha' });
    expect(result).toHaveLength(8); // Default size
    expect(result).toMatch(/^[a-zA-Z]+$/); // Result should only contain alphabetic characters
  });

  // Test with 'alphaNumeric' charType
  it('should generate a string with alphanumeric characters when charType is "alphaNumeric"', () => {
    const result = randSequence({ charType: 'alphaNumeric' });
    expect(result).toHaveLength(8); // Default size
    expect(result).toMatch(/^[a-zA-Z0-9]+$/); // Result should only contain alphanumeric characters
  });

  // Test with 'special' charType
  it('should generate a string with special characters when charType is "special"', () => {
    const result = randSequence({ charType: 'special' });
    expect(result).toHaveLength(8); // Default size
    expect(result.split('').some((char) => letters.includes(char))).toBe(false);
    expect(result.split('').every((char) => specials.includes(char))).toBe(
      true
    );
  });

  // Test with custom 'chars' value
  it('should generate a string based on custom chars', () => {
    const result = randSequence({ chars: 'abcd1234' });
    expect(result).toHaveLength(8); // Default size
    expect(result).toMatch(/^[abcd1234]+$/); // Result should only contain characters from the custom string
  });

  // Test for Invalid `charType`
  it('should throw an error for invalid charType', () => {
    // Use a try-catch to check if the error is thrown
    expect(() => randSequence({ charType: 'invalidType' as any })).toThrow(
      'Invalid charType: invalidType'
    );
  });

  // Test with custom size
  it('should generate a string of custom length when size is provided', () => {
    const result = randSequence({ size: 12 });
    expect(result).toHaveLength(12); // Custom size
    expect(typeof result).toBe('string'); // Result should be a string
  });

  // Test with custom size and 'numeric' charType
  it('should generate a numeric string of custom length', () => {
    const result = randSequence({ size: 10, charType: 'numeric' });
    expect(result).toHaveLength(10); // Custom size
    expect(result).toMatch(/^\d+$/); // Result should only contain digits
  });

  // Test with custom size and 'alpha' charType
  it('should generate an alphabetic string of custom length', () => {
    const result = randSequence({ size: 6, charType: 'alpha' });
    expect(result).toHaveLength(6); // Custom size
    expect(result).toMatch(/^[a-zA-Z]+$/); // Result should only contain alphabetic characters
  });
});
