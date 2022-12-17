import { randBetweenDate } from '../lib/between-date';

const now = new Date();
const future = new Date('12/02/2040');

describe('randBetweenDate', () => {
  it('should return date between from and to', () => {
    const from = now;
    const to = future;

    const result = randBetweenDate({ from, to });

    expect(result.getTime()).toBeGreaterThan(from.getTime());
    expect(result.getTime()).toBeLessThan(to.getTime());
  });

  it('should use strings for dates', () => {
    const from = now.toISOString();
    const to = future.toISOString();

    const result = randBetweenDate({ from, to });

    expect(result.getTime()).toBeGreaterThan(new Date(from).getTime());
    expect(result.getTime()).toBeLessThan(new Date(to).getTime());
  });

  describe('from date is after to date', () => {
    let from: Date;
    let to: Date;

    beforeEach(() => {
      from = future;
      to = now;
    });

    it('should throw error', () => {
      expect(() => randBetweenDate({ from, to })).toThrow(
        'From must be before to'
      );
    });
  });
});
