import { randFullName } from '@ngneat/falso';

describe('fullName', () => {
  let specialCharRegex: RegExp;

  beforeEach(() => {
    specialCharRegex =
      /[ÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœ]/;
  });

  describe('withAccents is passed', () => {
    let withAccents: boolean;

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a string with a first name, a space and then last name', () => {
        const result = randFullName({ withAccents: false });

        expect(result.match(/^\w+\s\w+$/)).toBeTruthy();
      });

      it('should return a string should contain accents', () => {
        const result = randFullName({ withAccents });

        expect(result.match(specialCharRegex)).toBeTruthy();
      });
    });

    describe('withAccents is false', () => {
      beforeEach(() => {
        withAccents = false;
      });

      it('should return a string with a first name, a space and then last name', () => {
        const result = randFullName({ withAccents: false });

        expect(result.match(/^\w+\s\w+$/)).toBeTruthy();
      });

      it('should not return a string should contain accents', () => {
        const result = randFullName({ withAccents });

        expect(result.match(specialCharRegex)).toBeFalsy();
      });
    });
  });

  describe('length is passed', () => {
    it('should not contain commas', () => {
      // Bug fix #100: Length option was passed to randFirstName & randLastName
      const [result1, result2, result3] = randFullName({ length: 3 });

      expect(result1).not.toContain(',');
      expect(result2).not.toContain(',');
      expect(result3).not.toContain(',');
    });
  });
});
