import { FakeOptions, fake } from './core/core';
import { data } from './random-alpha.json';

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
export function randAlpha<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
