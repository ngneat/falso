import { text } from '../lib/text';

describe('text', () => {
  describe('charCount IS passed', () => {
    describe('charCount of 0', () => {
      it('should thrown min value error', () => {
        const result = () => text({ charCount: 0 });

        expect(result).toThrow('Character count must be greater than 0');
      });
    });

    describe('charCount is NaN', () => {
      it('should thrown min value error', () => {
        const result = () => text({ charCount: NaN });

        expect(result).toThrow('Character count must be greater than 0');
      });
    });

    describe('charCount is 1', () => {
      it('should return a string with 1 characters', () => {
        const result = text({ charCount: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('charCount is 100', () => {
      it('should return a string with 100 characters', () => {
        const result = text({ charCount: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('charCount is 5000', () => {
      it('should return a string with 5000 characters', () => {
        const result = text({ charCount: 5000 });

        expect(result?.length).toEqual(5000);
      });
    });
  });

  describe('charCount is NOT passed', () => {
    it('should return a string with 10 characters', () => {
      const result = text();

      expect(result?.length).toEqual(10);
    });
  });
});
