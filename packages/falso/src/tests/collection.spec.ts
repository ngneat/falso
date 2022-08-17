import { toCollection } from '../lib/collection';
import { randNumber, random, seed } from '@ngneat/falso';
import * as numberFunctions from '../lib/number';
import Mock = jest.Mock;

interface fakeData {
  data: number;
}

describe('randCollection', () => {
  it('should create', () => {
    expect(toCollection).toBeTruthy();
  });

  it('should return one collection if length is not specified', () => {
    const expectedData: fakeData = { data: 1 };
    expect(toCollection<fakeData>(() => expectedData)).toEqual(expectedData);
  });

  it('should return an array of one collection if length is specified to 1', () => {
    const expectedData: fakeData = { data: 1 };
    expect(toCollection<fakeData>(() => expectedData)).toEqual(expectedData);
    expect(
      toCollection(() => expectedData, {
        length: 1,
      })
    ).toEqual([expectedData]);
  });

  it('should return a collection of 2 elements if length=2 specified', () => {
    const expectedData: fakeData = { data: 1 };
    expect(
      toCollection(() => expectedData, {
        length: 2,
      })
    ).toEqual([expectedData, expectedData]);
  });

  describe('should call generators functions', () => {
    let generatorFunction: Mock;

    beforeAll(() => {
      generatorFunction = jest.fn();
      generatorFunction.mockReturnValue({ data: 1 });
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a collection of 2 elements that call another function', () => {
      const expectedData: fakeData = { data: 1 };
      expect(
        toCollection(generatorFunction, {
          length: 2,
        })
      ).toEqual([{ data: 1 }, { data: 1 }]);
      expect(generatorFunction).toHaveBeenCalledTimes(2);
      expect(generatorFunction).toHaveBeenCalledWith({ length: 2 });
    });
  });
  describe('with call external random function', () => {
    let randNumberSpy: jest.SpyInstance;

    beforeAll(() => {
      randNumberSpy = jest.spyOn(numberFunctions, 'randNumber');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return a collection of 2 elements that call another function', () => {
      const expectedData: fakeData = { data: 1 };
      randNumberSpy.mockReturnValueOnce(1).mockReturnValueOnce(2);
      expect(
        toCollection(
          () => {
            return { data: randNumber() };
          },
          { length: 2 }
        )
      ).toEqual([{ data: 1 }, { data: 2 }]);
    });
  });
});
