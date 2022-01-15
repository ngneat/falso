import { FakeOptions, fake } from './core/core';
import { data } from './mac.json';

/**
 * Generate a random job type.
 *
 * @category internet
 *
 * @example
 *
 * randMac()
 *
 * @example
 *
 * randMac({ length: 10 })
 *
 */
export function randMac<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
