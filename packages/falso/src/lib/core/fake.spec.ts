import { randWord } from '@ngneat/falso';
import { fake, FakeOptions, FactoryFunction } from './core';

describe('fake', () => {
  describe('data from array', () => {
    let data: string[];

    beforeEach(() => {
      data = randWord({ length: 4 });
    });

    describe('length & priority', () => {
      describe('length is 0', () => {
        it('should return empty array', () => {
          const response = fake(data, { length: 0 });

          expect(response).toEqual([]);
        });
      });

      describe("priority: 'length'", () => {
        let options: FakeOptions;

        beforeEach(() => {
          options = {
            length: 10,
            priority: 'length',
          };
        });

        it('should return an array with passed length', () => {
          const response = fake(data, options);

          expect(response.length).toEqual(10);
        });
      });

      describe("priority: 'unique'", () => {
        let options: FakeOptions;

        beforeEach(() => {
          options = {
            length: 10,
            priority: 'unique',
          };
        });

        it('should return an array with length >= data length', () => {
          const response = fake(data, options);

          expect(response.length).toEqual(4);
        });
      });
    });
  });

  describe('data from function', () => {
    let data: {
      dataFunction: FactoryFunction<string>;
    };

    beforeEach(() => {
      data = {
        dataFunction: () => 'zero',
      };

      jest
        .spyOn(data, 'dataFunction')
        .mockReturnValueOnce('one')
        .mockReturnValueOnce('two')
        .mockReturnValueOnce('tree')
        .mockReturnValueOnce('four');
    });

    describe('length & priority', () => {
      describe('length is 0', () => {
        it('should return empty array', () => {
          const response = fake(data.dataFunction, { length: 0 });

          expect(response).toEqual([]);
        });
      });

      describe("priority: 'length'", () => {
        let options: FakeOptions;

        beforeEach(() => {
          options = {
            length: 10,
            priority: 'length',
          };
        });

        it('should return an array with passed length', () => {
          const response = fake(data.dataFunction, options);

          expect(response.length).toEqual(10);
        });
      });

      describe("priority: 'unique'", () => {
        let options: FakeOptions;

        beforeEach(() => {
          options = {
            length: 10,
            priority: 'unique',
          };
        });

        it('should return an array with length >= total data unique values length', () => {
          const response = fake(data.dataFunction, options);

          expect(response.length).toEqual(5);
        });
      });
    });
  });
});
