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

  it('should pass when date is unique', () => {
    const result = dateIsUnique(date3, dates);

    expect(result).toEqual(true);
  });

  it('should not pass when date is not unique', () => {
    const result = dateIsUnique(date2, dates);

    expect(result).toEqual(false);
  });
});
