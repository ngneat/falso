import { randSports } from '../lib/sports';
import { data } from '../lib/sports.json';

describe('sports', () => {
  let allSports: string[] = [];
  beforeAll(() => {
    const sportData: Record<string, string[]> = data;
    for (const category in sportData) {
      allSports.push(...sportData[category]);
    }
    allSports = Array.from(new Set(allSports));
  });
  describe('base case', () => {
    it('should return a random sports name', () => {
      const sport = randSports();
      expect(allSports).toContain(sport);
    });
  });
  describe('category is passed', () => {
    it('should return a sport from the selected category', () => {
      const sport = randSports({ category: 'olympic' });
      expect(data.olympic).toContain(sport);
    });

    describe('category is winterOlympic', () => {
      it('should return a sport from the category winterOlympic', () => {
        const sport = randSports({ category: 'winterOlympic' });
        expect(data.winterOlympic).toContain(sport);
      });
    });
  });
  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randSports({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randSports({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return an array length of 3', () => {
        const result = randSports({ length: 3 });
        expect(allSports).toEqual(expect.arrayContaining(result));
      });
    });
  });
});
