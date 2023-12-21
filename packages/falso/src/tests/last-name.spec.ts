import { randLastName } from '../lib/last-name';
import { NameOptions } from '../lib/full-name';
import * as randBooleanFunctions from '../lib/boolean';

import { data } from '../lib/last-name.json';
import { data as locale_ptBR } from '../lib/i18n/pt-br/last-name.i18n.json';

describe('lastName', () => {
  let specialCharRegex: RegExp;

  beforeEach(() => {
    specialCharRegex =
      /[āĀàÀáÁâÂãÃäÄÅåæÆąĄçÇčČćĆðÐēĒèÈéÉêÊĚěëËėĖìÌíÍîÎïÏłŁñÑńŃōŌøØòÒóÓôÔõÕöÖőŐœŒřŘšŠßÞþùÙúÚûÛūŪüÜýÝÿŸžŽżŻ]/;
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('last-name.json', () => {
    describe('withoutAccents', () => {
      it('should not contain any accented characters', () => {
        const allNames = data.withoutAccents.join('');

        expect(allNames).not.toMatch(specialCharRegex);
      });

      it('should not contain unexpected special characters', () => {
        const allNames = data.withoutAccents.join('');
        const notSpecialCharRegex = /[^a-z-]/i;

        expect(allNames).not.toMatch(notSpecialCharRegex);
      });
    });
  });

  describe('withAccents is passed', () => {
    let withAccents: boolean;

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a lastName with at least 1 accented character', () => {
        const result = randLastName({ withAccents });

        expect(result.match(specialCharRegex)).toBeTruthy();
      });
    });

    describe('withAccents is not true', () => {
      beforeEach(() => {
        withAccents = false;
      });

      it('should return a lastName with only non-accented characters', () => {
        const result = randLastName({ withAccents });

        expect(result.match(specialCharRegex)).toBeFalsy();
      });
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randLastName({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randLastName({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randLastName({ length: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('length is 3', () => {
      let randBooleanSpy: jest.SpyInstance;

      beforeEach(() => {
        randBooleanSpy = jest
          .spyOn(randBooleanFunctions, 'randBoolean')
          .mockImplementation(() => null);
      });

      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should return an array length of 3, each with a random lastName', () => {
        randBooleanSpy.mockReturnValue(true);

        const [lastName1, lastName2, lastName3] = randLastName({ length: 3 });

        expect(data['withAccents']).toContain(lastName1);
        expect(data['withAccents']).toContain(lastName2);
        expect(data['withAccents']).toContain(lastName3);
      });
    });
  });

  describe('with provided locale PT-BR data', () => {
    const data = locale_ptBR;
    let options: NameOptions;

    beforeEach(() => {
      options = {
        locale: data,
      };
    });

    it('should return a lastName with at least 1 accented character', () => {
      const result = randLastName({
        ...options,
        withAccents: true,
      });

      expect(result.match(specialCharRegex)).toBeTruthy();
      expect(data.withAccents.includes(result)).toBe(true);
    });

    it('should return a lastName with only non-accented characters', () => {
      const result = randLastName({
        ...options,
        withAccents: false,
      });

      expect(result.match(specialCharRegex)).toBeFalsy();
      expect(data.withoutAccents.includes(result)).toBe(true);
    });
  });
});
