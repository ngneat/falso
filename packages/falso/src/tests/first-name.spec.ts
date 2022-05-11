import { randFirstName } from '../lib/first-name';
import { data } from '../lib/first-name.json';
import * as randBooleanFunctions from '../lib/boolean';

describe('firstName', () => {
  let specialCharRegex: RegExp;

  beforeEach(() => {
    specialCharRegex =
      /[āĀàÀáÁâÂãÃäÄÅåæÆçÇčČćĆðÐēĒèÈéÉêÊĚěëËėĖìÌíÍîÎïÏłŁñÑńŃōŌøØòÒóÓôÔõÕöÖőŐœŒřŘšŠßÞþùÙúÚûÛūŪüÜýÝÿŸžŽżŻ]/;
  });

  afterAll(() => {
    jest.resetAllMocks();
  });

  describe('first-name.json', () => {
    describe('withoutAccents', () => {
      it('should not contain any accented characters', () => {
        const allNames = [
          ...data.withoutAccents.male,
          ...data.withoutAccents.female,
        ].join('');

        expect(allNames).not.toMatch(specialCharRegex);
      });
    });
  });

  describe('withAccents is passed', () => {
    let withAccents: boolean;
    let gender: 'male' | 'female';

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a firstName with at least 1 accented character', () => {
        const result = randFirstName({ withAccents });

        expect(result.match(specialCharRegex)).toBeTruthy();
      });

      it('should return a firstName with at least 1 accented character and female gender', () => {
        gender = 'female';
        const result = randFirstName({ withAccents, gender });

        expect(result.match(specialCharRegex)).toBeTruthy();
        expect(data.withAccents.female.includes(result)).toBe(true);
      });

      it('should return a firstName with at least 1 accented character and male gender', () => {
        gender = 'male';
        const result = randFirstName({ withAccents, gender });

        expect(result.match(specialCharRegex)).toBeTruthy();
        expect(data.withAccents.male.includes(result)).toBe(true);
      });
    });

    describe('withAccents is not true', () => {
      beforeEach(() => {
        withAccents = false;
      });

      it('should return a firstName with only non-accented characters', () => {
        const result = randFirstName({ withAccents });

        expect(result.match(specialCharRegex)).toBeFalsy();
      });

      it('should return a firstName with only non-accented characters and female gender', () => {
        gender = 'female';
        const result = randFirstName({ withAccents, gender });

        expect(result.match(specialCharRegex)).toBeFalsy();
        expect(data.withoutAccents.female.includes(result)).toBe(true);
      });

      it('should return a firstName with only non-accented characters and male gender', () => {
        gender = 'male';
        const result = randFirstName({ withAccents, gender });

        expect(result.match(specialCharRegex)).toBeFalsy();
        expect(data.withoutAccents.male.includes(result)).toBe(true);
      });
    });
  });

  describe('length is passed', () => {
    describe('length is 1', () => {
      it('should return an array length of 1', () => {
        const result = randFirstName({ length: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('length is 5', () => {
      it('should return an array length of 5', () => {
        const result = randFirstName({ length: 5 });

        expect(result?.length).toEqual(5);
      });
    });

    describe('length is 100', () => {
      it('should return an array length of 100', () => {
        const result = randFirstName({ length: 100 });

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

      it('should return an array length of 3, each with a random firstname', () => {
        randBooleanSpy.mockReturnValue(false);

        const [firstName1, firstName2, firstName3] = randFirstName({
          length: 3,
        });

        const names = [
          ...data.withoutAccents.male,
          ...data.withoutAccents.female,
        ];

        expect(randBooleanSpy).toHaveBeenCalled();
        expect(names).toContain(firstName1);
        expect(names).toContain(firstName2);
        expect(names).toContain(firstName3);
      });
    });
  });
});
