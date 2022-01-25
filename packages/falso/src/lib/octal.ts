import { FakeOptions, fake } from './core/core';

/**
 * Generate a random octal.
 *
 * @category Math
 *
 * @example
 *
 * randOctal()
 *
 * @example
 *
 * randOctal({ length: 10 })
 *
 */
export function randOctal<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  const RADIX = 8;

  const randomNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  return BigInt(randomNumber.toString(RADIX));
}
