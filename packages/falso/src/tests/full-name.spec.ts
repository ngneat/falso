import { randFullName } from '../lib/full-name';

describe('fullName', () => {
  let specialCharRegex: RegExp;
  let nameStructureRegex: RegExp | string;

  beforeEach(() => {
    specialCharRegex =
      /[ÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœŘČĆŃĖřūþćńė]/;
    nameStructureRegex =
      /^[a-zA-ZÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœŘČĆŃĖřūþćńė]+(\-[a-zA-ZÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœŘČĆŃĖřūþćńė]+)?\s[a-zA-ZÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœŘČĆŃĖřūþćńė]+(\-[a-zA-ZÞōŌāĀēĒØøłŁàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêěîôûčÂĚÊšŠÎÔŪÛŽžÐŻżãñõÃÑÕäëïöüÿÄËÏÖÜŸőŐçÇßðÅåÆæœŘČĆŃĖřūþćńė]+)?$/;
  });

  describe('withAccents is passed', () => {
    let withAccents: boolean;

    describe('withAccents is true', () => {
      beforeEach(() => {
        withAccents = true;
      });

      it('should return a string with a first name, a space and then last name', () => {
        const result = randFullName({ withAccents: false });

        expect(result).toMatch(nameStructureRegex);
      });

      it('should return a string should contain accents', () => {
        const result = randFullName({ withAccents });

        expect(result).toMatch(specialCharRegex);
      });
    });

    describe('withAccents is false', () => {
      beforeEach(() => {
        withAccents = false;
      });

      it('should return a string with a first name, a space and then last name', () => {
        const result = randFullName({ withAccents: false });

        expect(result).toMatch(nameStructureRegex);
      });

      it('should not return a string should contain accents', () => {
        const result = randFullName({ withAccents });

        expect(result).not.toMatch(specialCharRegex);
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
