import { FakeOptions, fake } from './core/core';
import { data } from './last-name.json';

/**
 * Generate a random last-name.
 *
 * @category TBD
 *
 * @example
 *
 * randLastName()
 *
 * @example
 *
 * randLastName({ length: 10 })
 *
 */
export function randLastName<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
