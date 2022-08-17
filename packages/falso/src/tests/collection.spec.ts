import { toCollection } from '../lib/collection';
import { randNumber, random, seed } from '@ngneat/falso';
import * as numberFunctions from '../lib/number';
import * as coreFunctions from '../lib/core/core';
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
      expect(generatorFunction).toHaveBeenNthCalledWith(1, { length: 2 }, 0);
      expect(generatorFunction).toHaveBeenNthCalledWith(2, { length: 2 }, 1);
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

  describe('Generate a random lenth of collection', () => {
    let randNumberSpy: jest.SpyInstance;

    beforeAll(() => {
      randNumberSpy = jest.spyOn(coreFunctions, 'getRandomInRange');
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should return an empty array if getRandomInRange equal to zero', () => {
      randNumberSpy.mockReturnValueOnce(0);

      expect(
        toCollection(
          (__option, index) => {
            return { data: index };
          },
          { minLength: 0 }
        )
      ).toEqual([]);
    });

    it('should return an array with one element if getRandomInRange equal to 1', () => {
      randNumberSpy.mockReturnValueOnce(1);

      expect(
        toCollection(
          (__option, index) => {
            return { data: index };
          },
          { minLength: 0 }
        )
      ).toEqual([{ data: 0 }]);
    });

    it('should return an array with one element if minLength and maxLength equal to 1', () => {
      expect(
        toCollection(
          (__option, index) => {
            return { data: index };
          },
          { minLength: 1, maxLength: 1 }
        )
      ).toEqual([{ data: 0 }]);
    });

    it('should return an array with 8 element if getRandomInRange return a 8 value', () => {
      randNumberSpy.mockReturnValueOnce(8);

      expect(
        toCollection(
          (__option, index) => {
            return { data: index };
          },
          { maxLength: 10 }
        )
      ).toEqual([
        { data: 0 },
        { data: 1 },
        { data: 2 },
        { data: 3 },
        { data: 4 },
        { data: 5 },
        { data: 6 },
        { data: 7 },
      ]);
    });

    it('should getRandomInRange with correct value', () => {
      randNumberSpy.mockReturnValue(5);

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { maxLength: 8 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(1, {
        min: 0,
        max: 8,
        fraction: 0,
      });

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { minLength: 1, maxLength: 7 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(2, {
        min: 1,
        max: 7,
        fraction: 0,
      });

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { minLength: 8 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(3, {
        min: 8,
        max: 18,
        fraction: 0,
      });
    });

    it('should getRandomInRange with default value if default value is given', () => {
      randNumberSpy.mockReturnValue(5);

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { maxLength: 10 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(1, {
        min: 0,
        max: 10,
        fraction: 0,
      });

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { minLength: 0, maxLength: 10 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(2, {
        min: 0,
        max: 10,
        fraction: 0,
      });

      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { minLength: 0 }
      );
      expect(randNumberSpy).toHaveBeenNthCalledWith(3, {
        min: 0,
        max: 10,
        fraction: 0,
      });
    });

    it('should not call getRandomInRange if minLength or maxLength was not called', () => {
      toCollection(
        (__option, index) => {
          return { data: index };
        },
        { length: 10 }
      );
      expect(randNumberSpy).not.toBeCalled();

      toCollection((__option, index) => {
        return { data: index };
      });
      expect(randNumberSpy).not.toBeCalled();
    });
  });
});
