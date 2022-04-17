import { rand } from '../lib/rand';

describe('rand', () => {
  it('should get one element of Array', () => {
    const result = rand(['a', 'b', 'c']);
    const expected = /[abc]/gi;

    expect(result).toMatch(expected);
  });
  it('should return a array of random element of given array', () => {
    const result = rand(['a', 'b', 'c'], { length: 3 });

    expect(result.length).toEqual(3);
  });
  it('should return an empty array when length is 0', () => {
    const result = rand(['a', 'b', 'c'], { length: 0 });

    expect(result).toEqual([]);
  });
});
