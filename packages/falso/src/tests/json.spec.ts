import { randJSON } from '../lib/json';
import { randNumber } from '../lib/number';

describe('randJSON', () => {
  describe('when it returns the expected values', () => {
    it('returned value should be an object', () => {
      const result = randJSON();
      expect(typeof result).toEqual('object');
    });

    it('should return an object with the given number of keys', () => {
      const totalKeys = randNumber({ min: 1, max: 30 });
      const result = randJSON({ totalKeys });

      expect(Object.keys(result).length).toBe(totalKeys);
    });

    it('should return an object with a random number of keys', () => {
      const minKeys = randNumber({ min: 1, max: 30 });
      const maxKeys = randNumber({ min: minKeys + 1, max: 30 });
      const result = randJSON({ minKeys, maxKeys });

      expect(Object.keys(result).length).toBeGreaterThanOrEqual(minKeys);
      expect(Object.keys(result).length).toBeLessThanOrEqual(maxKeys);
    });
  });

  describe('length is passed', () => {
    let length: number;

    beforeEach(() => {
      length = randNumber({ min: 1, max: 30, fraction: 1 });
    });

    it('should return an array length passed', () => {
      const result = randJSON({ length });

      expect(result?.length).toEqual(length);
    });
  });
});
