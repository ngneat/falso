import { randBetweenDate } from '../lib/between-date';

describe('randBetweenDate', () => {
  it('should return date between from and to', () => {
    const from = new Date();
    const to = new Date('12/02/2022');

    const result = randBetweenDate({ from, to });

    expect(result.getTime()).toBeGreaterThan(from.getTime());
    expect(result.getTime()).toBeLessThan(to.getTime());
  });

  it('should use strings for dates', () => {
    const from = new Date().toISOString();
    const to = new Date('12/02/2022').toISOString();

    const result = randBetweenDate({ from, to });

    expect(result.getTime()).toBeGreaterThan(new Date(from).getTime());
    expect(result.getTime()).toBeLessThan(new Date(to).getTime());
  });

  describe('from date is after to date', () => {
    let from: Date;
    let to: Date;

    beforeEach(() => {
      from = new Date('12/02/2022');
      to = new Date();
    });

    it('should throw error', () => {
      expect(() => randBetweenDate({ from, to })).toThrow(
        'From must be before to'
      );
    });
  });
});
