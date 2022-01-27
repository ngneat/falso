import { randMonth } from '../lib/month';
import { data } from '../lib/month.json';

describe('Month', () => {
  let slicedData: string[] = [];
  beforeAll(() => {
    slicedData = data.map((month) => month.slice(0, 3));
  });

  describe('base case', () => {
    it('should return a random month', () => {
      const month = randMonth();

      expect(data).toContain(month);
    });
  });
  describe('if abbreviation is true', () => {
    it('should return first 3 chars of the month', () => {
      const slicedMonth = randMonth({ abbreviation: true });

      expect(slicedData).toContain(slicedMonth);
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randMonth({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 10', () => {
      it('should return an array length of 10', () => {
        const result = randMonth({ length: 10 });

        expect(result?.length).toEqual(10);
      });
    });

    describe('length is 3 and abbreviation is true', () => {
      it('should return an array length of 3, each with abbreviated month', () => {
        const result = randMonth({ length: 3 });

        expect(result).toEqual(expect.arrayContaining(result));
      });
    });
  });
});
