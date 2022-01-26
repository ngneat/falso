import { randBinary } from '../lib/binary';

describe('binary', () => {
  describe('One Binary', () => {
    it('should create one random binary number', () => {
      const randomBinary = randBinary();

      const verificationRegex = /[0-1]+/;

      expect(randomBinary).toBeTruthy();
      expect(typeof randomBinary).toEqual('string');
      expect(verificationRegex.test(randomBinary)).toBeTruthy();
    });

    it('should create multiple random binary numbers', () => {
      const RESULT_LENGTH = 10;
      const randomBinary = randBinary({ length: RESULT_LENGTH });

      expect(randomBinary).toBeTruthy();
      expect(Array.isArray(randomBinary)).toBeTruthy();
      expect(randomBinary.length).toEqual(RESULT_LENGTH);
    });
  });
});
