import { FoodOrigin, randFood } from '../lib/food';
import { data } from '../lib/food.json';
import * as coreFunctions from '../lib/core/core';

describe('food', () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('origin is passed', () => {
    let origin: FoodOrigin;

    beforeEach(() => {
      origin = 'italy';
    });

    it('should return a random dish from selected origin', () => {
      const result = randFood({ origin: origin });

      expect(data[origin]).toContain(result);
    });
  });

  describe('origin is not passed', () => {
    let getRandomInRangeSpy: jest.SpyInstance;

    beforeEach(() => {
      getRandomInRangeSpy = jest
        .spyOn(coreFunctions, 'getRandomInRange')
        .mockImplementation(() => 1);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a random dish from a random origin', () => {
      const originIndex = 1;
      const origin = Object.keys(data)[originIndex] as FoodOrigin;
      getRandomInRangeSpy.mockReturnValue(originIndex);

      const result = randFood();

      expect(data[origin]).toContain(result);
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
      let getRandomInRangeSpy: jest.SpyInstance;

      beforeEach(() => {
        getRandomInRangeSpy = jest
          .spyOn(coreFunctions, 'getRandomInRange')
          .mockImplementation(() => 1);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return an array length of 3, each with a random dish from a random origin', () => {
        const originIndex = 1;
        const origin = Object.keys(data)[originIndex] as FoodOrigin;
        getRandomInRangeSpy.mockReturnValue(originIndex);

        const [food1, food2, food3] = randFood({ length: 3 });

        expect(data[origin]).toContain(food1);
        expect(data[origin]).toContain(food2);
        expect(data[origin]).toContain(food3);
      });
    });
  });
});
