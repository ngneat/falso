import { randUserName } from '../lib/user-name';
import { randFirstName } from '../lib/first-name';
import { randLastName } from '../lib/last-name';

describe('username', () => {
  describe('firstName is passed', () => {
    let firstName: string;

    beforeEach(() => {
      firstName = randFirstName();
    });

    it('should contain the first name', () => {
      const result = randUserName({ firstName });

      expect(result).toContain(firstName);
    });
  });

  describe('lastName is passed', () => {
    let lastName: string;

    beforeEach(() => {
      lastName = randLastName();
    });

    it('should contain the first name', () => {
      const result = randUserName({ lastName });

      expect(result).toContain(lastName);
    });
  });

  describe('withAccents is passed', () => {
    let withAccents: boolean;
    const specialCharRegex =
      /[āĀàÀáÁâÂãÃäÄÅåæÆçÇčČćĆðÐēĒèÈéÉêÊĚěëËėĖìÌíÍîÎïÏłŁñÑńŃōŌøØòÒóÓôÔõÕöÖőŐœŒřŘšŠßÞþùÙúÚûÛūŪüÜýÝÿŸžŽżŻ]/;

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a string containing accents', () => {
        const result = randUserName({ withAccents });

        expect(result).toMatch(specialCharRegex);
      });
    });

    describe('withAccents is false', () => {
      beforeEach(() => {
        withAccents = false;
      });

      it('should not return a string containing accents', () => {
        const result = randUserName({ withAccents });

        expect(result).not.toMatch(specialCharRegex);
      });
    });
  });
});
