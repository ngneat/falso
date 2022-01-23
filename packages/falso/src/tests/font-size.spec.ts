import { randFontSize } from '../lib/font-size';

describe('fontSize', () => {
  describe('without units', () => {
    it('should create a random font size (unit px)', () => {
      const fontSize = randFontSize();

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('px');
    });
  });
  describe('with units', () => {
    it('should create a random font size (unit px)', () => {
      const fontSize = randFontSize({
        suffix: 'px',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('px');
    });

    it('should create a random font size (unit cm)', () => {
      const fontSize = randFontSize({
        suffix: 'cm',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('cm');
    });

    it('should create a random font size (unit em)', () => {
      const fontSize = randFontSize({
        suffix: 'em',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('em');
    });

    it('should create a random font size (unit rem)', () => {
      const fontSize = randFontSize({
        suffix: 'rem',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-3)).toEqual('rem');
    });

    it('should create a random font size (unit vw)', () => {
      const fontSize = randFontSize({
        suffix: 'vw',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('vw');
    });

    it('should create a random font size (unit vh)', () => {
      const fontSize = randFontSize({
        suffix: 'vh',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-2)).toEqual('vh');
    });

    it('should create a random font size (unit vmin)', () => {
      const fontSize = randFontSize({
        suffix: 'vmin',
      });

      expect(typeof fontSize).toEqual('string');
      expect(fontSize.slice(-4)).toEqual('vmin');
    });
  });

  describe('multiple', () => {
    it('should create RESULT_LENGTH random font size (unit px)', () => {
      const RESULT_LENGTH = 5;

      const multipleRandomFontSize = randFontSize({ length: RESULT_LENGTH });
      expect(typeof multipleRandomFontSize).toEqual('object');
      expect(multipleRandomFontSize.length).toEqual(RESULT_LENGTH);
    });
  });
});
