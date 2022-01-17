import { seed } from '../lib/random';
import { rand } from '../lib/rand';

describe('seed', () => {
  it('should return same values with constant seed', () => {
    const seed1Value = 'constant-seed-1';
    const seed2Value = 'constant-seed-2';
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    seed(seed1Value);
    expect(rand(values)).toEqual(1);
    expect(rand(values)).toEqual(6);
    expect(rand(values)).toEqual(5);

    seed(seed2Value);
    expect(rand(values)).toEqual(7);
    expect(rand(values)).toEqual(5);
    expect(rand(values)).toEqual(1);

    seed(seed1Value);
    expect(rand(values)).toEqual(1);
    expect(rand(values)).toEqual(6);
    expect(rand(values)).toEqual(5);

    // Reset seed in case other tests depend on it
    seed();
  });
});
