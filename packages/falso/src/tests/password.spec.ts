import { randPassword } from '../lib/password';

describe('randPassword', () => {
  it('should generate a string of default length 15 with default chars', () => {
    const result = randPassword();
    expect(result).toHaveLength(15); // Default length should be 15
    expect(typeof result).toBe('string'); // Result should be a string
  });

  it('should generate a string of length 10 with default chars', () => {
    const result = randPassword({ size: 10 });
    expect(result).toHaveLength(10);
    expect(typeof result).toBe('string'); // Result should be a string
  });

  it('should generate am array string of length 10 with default chars', () => {
    const result = randPassword({ length: 10 });
    expect(result).toHaveLength(10);
    expect(result.length).toBe(10);
  });
});
