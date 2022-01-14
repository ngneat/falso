import { FakeOptions, fake } from './core/core';
import { data } from './street-name.json';

/**
 * Generate a random street-name.
 *
 * @category TBD
 *
 * @example
 *
 * streetName()
 *
 * @example
 *
 * streetName({ length: 10 })
 *
 */
export function streetName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
