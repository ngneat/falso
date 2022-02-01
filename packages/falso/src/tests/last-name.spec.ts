import { randLastName } from '../lib/last-name';
import { seed } from '../lib/random';
import { data } from '../lib/last-name.json';

describe('lastName', () => {
  let specialCharRegex: RegExp;

  beforeEach(() => {
    specialCharRegex =
      /[āĀàÀáÁâÂãÃäÄÅåæÆçÇčČćĆðÐēĒèÈéÉêÊĚěëËėĖìÌíÍîÎïÏłŁñÑńŃōŌøØòÒóÓôÔõÕöÖőŐœŒřŘšŠßÞþùÙúÚûÛūŪüÜýÝÿŸžŽżŻ]/;
  });

  describe('last-name.json', () => {
    describe('withoutAccents', () => {
      it('should not contain any accented characters', () => {
        const allNames = data.withoutAccents.join('');

        expect(allNames).not.toMatch(specialCharRegex);
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
      beforeEach(() => {
        seed('💻🌍🌎');
      });

      it('should return an array length of 3, each with a random lastName', () => {
        const result = randLastName({ length: 3 });

        expect(result).toEqual(['Friðriksson', 'Žukauskienė', 'Björnsson']);
      });
    });
  });
});
