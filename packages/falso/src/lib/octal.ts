import { fake, FakeOptions } from './core/core';

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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 26575274017412507
 * 223001471652072323
 * 160740577524717427
 */

export function randOctal<Options extends FakeOptions = never>(
  options?: Options
) {
  const RADIX = 8;

  return fake(() => {
    const randomNumber = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

    return BigInt(randomNumber.toString(RADIX));
  }, options);
}
