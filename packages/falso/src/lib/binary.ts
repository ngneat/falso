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
 * @example
 *
 * randBinary({ length: 10, priority: 'unique' }) // default is 'length'
 *
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
