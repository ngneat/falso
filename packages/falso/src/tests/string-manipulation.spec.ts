import {
  capitalizeFirstLetter,
  replaceAccentedChars,
} from '../lib/core/string-manipulation';

describe('string-manipulation', () => {
  describe('replaceAccentedChars', () => {
    it('should replace all accented chars with corresponding regular character', () => {
      const inputText =
        'āĀàÀáÁâÂãÃäÄÅåæÆçÇčČćĆðÐēĒèÈéÉêÊĚěëËėĖìÌíÍîÎïÏłŁñÑńŃōŌøØòÒóÓôÔõÕöÖőŐœŒřŘšŠßÞþùÙúÚûÛūŪüÜýÝÿŸžŽżŻ';
      const expectedResult =
        'aAaAaAaAaAaAAaaeAEcCcCcCdDeEeEeEeEEeeEeEiIiIiIiIlLnNnNoOoOoOoOoOoOoOoOoeOErRsSssthTHuUuUuUuUuUyYyYzZzZ';

      const result = replaceAccentedChars(inputText);

      expect(result).toContain(expectedResult);
    });
  });

  describe('capitalizeFirstLetter', () => {
    describe('first letter is uppercase', () => {
      it('should set first letter to be uppercase', () => {
        const result = capitalizeFirstLetter('Test');

        expect(result).toEqual('Test');
      });
    });

    describe('first letter is lowercase', () => {
      it('should set first letter to be uppercase', () => {
        const result = capitalizeFirstLetter('test');

        expect(result).toEqual('Test');
      });
    });
  });
});
