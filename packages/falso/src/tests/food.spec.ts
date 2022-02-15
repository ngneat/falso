import { randFood } from '../lib/food';
import { data } from '../lib/food.json';
import { seed } from '../lib/random';

describe('food', () => {
  beforeEach(() => {
    // Note: If more origins are added, some tests will fail
    seed('🍔🌯🥗🍣🧁🦐🍽');
  });

  describe('origin is passed', () => {
    it('should return a random dish from selected origin', () => {
      const result = randFood({ origin: 'italy' });

      expect(data['italy']).toContain(result);
      expect(result).toEqual('Il tartufo');
    });
  });

  describe('origin is not passed', () => {
    it('should return a random dish from a random origin', () => {
      const result = randFood();

      expect(result).toEqual('Mu kratha');
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randFood({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randFood({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randFood({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      it('should return an array length of 3, each with a random dish from a random origin', () => {
        const result = randFood({ length: 3 });

        expect(result).toEqual(['Mu kratha', 'Raclette', 'Clătitele cu gem']);
      });
    });
  });
});
