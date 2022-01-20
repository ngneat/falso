import { randFirstName, seed } from '@ngneat/falso';

describe('firstName', () => {
  describe('withAccents is passed', () => {
    let withAccents: boolean;
    let specialCharRegex: RegExp;

    beforeEach(() => {
      specialCharRegex =
        /[ÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœ]/;
    });

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a firstName with at least 1 accented character', () => {
        const result = randFirstName({ withAccents });

        expect(result.match(specialCharRegex)).toBeTruthy();
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
      beforeEach(() => {
        seed('💻🌍🌎');
      });

      it('should return an array length of 3, each with a random firstname', () => {
        const result = randFirstName({ length: 3 });

        expect(result).toEqual(['Daníel', 'Þóra', 'Árni']);
      });
    });
  });
});
