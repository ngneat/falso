import { FakeOptions } from './core/core';

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
 * @example
 *
 * randOctal({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randOctal<Options extends FakeOptions = never>(
  options?: Options
) {
  const RADIX = 8;

  const randomNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

  return BigInt(randomNumber.toString(RADIX));
}
