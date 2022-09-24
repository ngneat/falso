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
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randJSON({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randJSON({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 3', () => {
      it('should return an array length of 3, each with a random json', () => {
        const [json1, json2, json3] = randJSON({ length: 3 });

        expect(typeof json1).toEqual('object');
        expect(typeof json2).toEqual('object');
        expect(typeof json3).toEqual('object');
      });
    });
  });
});
