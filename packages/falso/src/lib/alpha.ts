import { FakeOptions, fake } from './core/core';
import { alphaChars } from './sequence';

/**
 * Get a random alpha.
 *
 * @category text
 *
 * @example
 *
 * randAlpha()
 *
 * @example
 *
 * randAlpha({ length: 3 })
 *
 */
export function randAlpha<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(alphaChars.split(''), options);
}
