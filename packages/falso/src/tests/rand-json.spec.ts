import { randNumber } from '..';
import { randJSON } from '../lib/rand-json';

describe('randJSON', () => {
  it('should create', () => {
    expect(randJSON).toBeTruthy();
  });

  describe('when it returns the expected values', () => {
    it('returned value should be an object', () => {
      const result = randJSON();
      expect(typeof result).toEqual('object');
    });

    it('should return an object with the given number of keys', () => {
      const length = randNumber({ min: 1, max: 30 });
      const result = randJSON({ length });

      expect(Object.keys(result).length).toBe(length);
    });

    it('should return an object with a random number of keys', () => {
      const min = randNumber({ min: 1, max: 30 });
      const max = randNumber({ min: min + 1, max: 30 });
      const result = randJSON({ min, max });

      expect(Object.keys(result).length).toBeGreaterThanOrEqual(min);
      expect(Object.keys(result).length).toBeLessThanOrEqual(max);
    });
  });
});
