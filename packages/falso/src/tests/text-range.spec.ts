import { randTextRange } from '../lib/text-range';
import { getRandomInRange } from '../lib/core/core';

describe('randTextRange', () => {
  describe('min is less than max', () => {
    let min: number;
    let max: number;

    beforeEach(() => {
      min = 10;
      max = 50;
    });

    it('should return string of length between min and max', () => {
      const result = randTextRange({ min, max });

      expect(result.length).toBeGreaterThan(min);
      expect(result.length).toBeLessThanOrEqual(max);
    });
  });

  describe('min is more than max', () => {
    let min: number;
    let max: number;

    beforeEach(() => {
      min = 30;
      max = 10;
    });

    it('should throw error', () => {
      expect(() => randTextRange({ min, max })).toThrow(
        'Min must be less than max'
      );
    });
  });

  describe('min is equal to max', () => {
    let min: number;
    let max: number;

    beforeEach(() => {
      min = 10;
      max = 10;
    });

    it('should throw error', () => {
      expect(() => randTextRange({ min, max })).toThrow(
        'Min must be less than max'
      );
    });
  });

  describe('length is passed', () => {
    let min: number;
    let max: number;

    beforeEach(() => {
      min = 10;
      max = 40;
    });

    describe('length is random number', () => {
      let length: number;

      beforeEach(() => {
        length = getRandomInRange({ min: 1, max: 50 });
      });

      it('should return an array with the passed length', () => {
        const result = randTextRange({ min, max, length });

        expect(result).toHaveLength(length);
      });
    });

    describe('length is 3', () => {
      const length = 3;

      it('should return an array length of 3, each with string length between min and max', () => {
        const [text1, text2, text3] = randTextRange({ min, max, length });

        expect(text1.length).toBeGreaterThanOrEqual(min);
        expect(text1.length).toBeLessThanOrEqual(max);
        expect(text2.length).toBeGreaterThanOrEqual(min);
        expect(text2.length).toBeLessThanOrEqual(max);
        expect(text3.length).toBeGreaterThanOrEqual(min);
        expect(text3.length).toBeLessThanOrEqual(max);
      });
    });
  });
});
