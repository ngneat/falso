import { rand } from '../lib/rand';
import { expectTypeOf } from 'expect-type';

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

  it('should return the correct type', () => {
    expectTypeOf(rand(['a', 'b', 'c'] as const)).toEqualTypeOf<
      'a' | 'b' | 'c'
    >();
    expectTypeOf(rand(['a', 'b', 'c'] as const, { length: 2 })).toEqualTypeOf<
      Array<'a' | 'b' | 'c'>
    >();
    expectTypeOf(rand(['a', 'b', 'c'])).toEqualTypeOf<string>();
    expectTypeOf(rand(['a', 'b', 'c'], { length: 2 })).toEqualTypeOf<
      string[]
    >();
  });
});
