import { randFutureDate } from '../lib/future-date';
import { randNumber } from '../lib/number';

describe('randFutureDate', () => {
  it('should return date after today', () => {
    const now = new Date().getTime();

    const result = randFutureDate();

    expect(result.getTime()).toBeGreaterThan(now);
  });

  describe('years is passed', () => {
    let years: number;

    describe('years is less than 0', () => {
      beforeEach(() => {
        years = 0 - randNumber();
      });

      it('should throw error', () => {
        expect(() => randFutureDate({ years })).toThrow(
          'Years must be positive, use past() instead'
        );
      });
    });

    describe('years is 0', () => {
      beforeEach(() => {
        years = 0;
      });

      it('should throw error', () => {
        expect(() => randFutureDate({ years })).toThrow(
          'Years must be positive, use past() instead'
        );
      });
    });

    describe('years is 1', () => {
      beforeEach(() => {
        years = 1;
      });

      it('should return date between now and 1 years time', () => {
        const now = new Date().getTime();
        const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;

        const result = randFutureDate({ years });

        expect(result.getTime()).toBeGreaterThan(now);
        expect(result.getTime()).toBeLessThan(now + yearsInMilliseconds);
      });
    });

    describe('years is 30', () => {
      beforeEach(() => {
        years = 30;
      });

      it('should return date between now and 30 years time', () => {
        const now = new Date().getTime();
        const yearsInMilliseconds = years * 365 * 24 * 60 * 60 * 1000;

        const result = randFutureDate({ years });

        expect(result.getTime()).toBeGreaterThan(now);
        expect(result.getTime()).toBeLessThan(now + yearsInMilliseconds);
      });
    });
  });
});
