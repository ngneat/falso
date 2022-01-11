import { text } from "../lib/text";

describe('text', () => {
  describe('charCount IS passed', () => {
    describe('charCount of 0', () => {
      it('should trigger console error', () => {
        try {
          text({ charCount: 0 });
        } catch (error) {
          expect(error).toEqual('Character count must be greater than 0');
        }
      });
    });

    describe('charCount of 1', () => {
      it('should return a string with 1 characters', () => {

        const result = text({ charCount: 1 });

        expect(result?.length).toEqual(1);
      });
    });

    describe('charCount of 100', () => {
      it('should return a string with 100 characters', () => {

        const result = text({ charCount: 100 });

        expect(result?.length).toEqual(100);
      });
    });

    describe('charCount of 5000', () => {
      it('should return a string with 5000 characters', () => {

        const result = text({ charCount: 5000 });

        expect(result?.length).toEqual(5000);
      });
    });

    describe('charCount of 5001', () => {
      it('should trigger console error', () => {
        try {
          text({ charCount: 5001 });
        } catch (error) {
          expect(error).toEqual('Character count must be less than 5000');
        }
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
