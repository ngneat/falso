import { toCollection } from '../lib/collection';
import { randNumber } from '../lib/number';

describe('toCollection', () => {
  it('should return an array of 5 items by default', () => {
    const result = toCollection(() => ({ data: 1 }), {});
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(5);
    result.forEach((item) => expect(item).toEqual({ data: 1 }));
  });

  it('should return an array of custom length', () => {
    const result = toCollection(() => ({ data: 2 }), { length: 3 });
    expect(result).toHaveLength(3);
    result.forEach((item) => expect(item).toEqual({ data: 2 }));
  });

  it('should call the generator function for each item and allow randomness', () => {
    let callCount = 0;
    const result = toCollection(
      () => {
        callCount++;
        return { data: randNumber({ min: 1, max: 1000 }) };
      },
      { length: 4 }
    );
    expect(result).toHaveLength(4);
    expect(callCount).toBe(4);
    // Check that at least two items are different (high probability)
    const unique = new Set(result.map((r) => r.data));
    expect(unique.size).toBeGreaterThan(1);
  });

  it('should return an empty array if length is 0', () => {
    const result = toCollection(() => ({ data: 3 }), { length: 0 });
    expect(result).toEqual([]);
  });

  it('should call the generator function the correct number of times', () => {
    const mockGen = jest.fn().mockReturnValue({ data: 4 });
    const result = toCollection(mockGen, { length: 7 });
    expect(result).toHaveLength(7);
    expect(mockGen).toHaveBeenCalledTimes(7);
  });
});
