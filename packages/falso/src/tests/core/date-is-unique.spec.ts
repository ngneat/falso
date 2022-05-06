import { dateIsUnique } from '../../lib/core/unique-validators';
import { randPastDate } from '@ngneat/falso';

describe('dateIsUnique', () => {
  let dates: Date[];
  let date1: Date;
  let date2: Date;
  let date3: Date;

  beforeEach(() => {
    date1 = randPastDate();
    date2 = randPastDate();
    date3 = randPastDate();
    dates = [date1, date2];
  });

  describe('date is unique', () => {
    it('should return true', () => {
      const result = dateIsUnique(date3, dates);

      expect(result).toEqual(true);
    });
  });

  describe('date is not unique', () => {
    it('should return false', () => {
      const result = dateIsUnique(date2, dates);

      expect(result).toEqual(false);
    });
  });
});
