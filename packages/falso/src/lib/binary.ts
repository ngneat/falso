import { FakeOptions, fake, getRandomInRange } from './core/core';

/**
 * Generate a random binary.
 *
 * @category Math
 *
 * @example
 *
 * randBinary()
 *
 * @example
 *
 * randBinary({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 * @example
 * 10010000100010100000011001101101000111010010001000100
 * 1011010110110110110010000110110101111111101111011100
 * 1000000100101111001100101001010111000001000000101010
 */

export function randBinary<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(() => {
    const RADIX = 2;

    const randomNumber = getRandomInRange({
      min: 0,
      max: Number.MAX_SAFE_INTEGER,
      fraction: 0,
    });

    return BigInt(randomNumber.toString(RADIX)).toString();
  }, options);
}
