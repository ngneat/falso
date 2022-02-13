import { randPastDate } from '../lib/past-date';
import { randNumber } from '../lib/number';

describe('randPastDate', () => {
  it('should return date before today', () => {
    const now = new Date().getTime();

    const result = randPastDate();

    expect(result.getTime()).toBeLessThan(now);
  });

  describe('years is passed', () => {
    let years: number;

    describe('years is less than 0', () => {
      beforeEach(() => {
        years = 0 - randNumber();
      });

      it('should throw error', () => {
        expect(() => randPastDate({ years })).toThrow(
          'Years must be positive, use future() instead'
        );
      });
    });

    describe('years is 0', () => {
      beforeEach(() => {
        years = 0;
      });

      it('should throw error', () => {
        expect(() => randPastDate({ years })).toThrow(
          'Years must be positive, use future() instead'
        );
      });
    });

    describe('years is 1', () => {
      beforeEach(() => {
        years = 1;
      });

      it('should return date between 1 year ago and now', () => {
        const now = new Date().getTime();
        const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;

        const result = randPastDate({ years });

        expect(result.getTime()).toBeLessThan(now);
        expect(result.getTime()).toBeGreaterThan(now - yearsInMilliseconds);
      });
    });

    describe('years is 30', () => {
      beforeEach(() => {
        years = 30;
      });

      it('should return date between 30 year ago and now', () => {
        const now = new Date().getTime();
        const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;

        const result = randPastDate({ years });

        expect(result.getTime()).toBeLessThan(now);
        expect(result.getTime()).toBeGreaterThan(now - yearsInMilliseconds);
      });
    });
  });
});
