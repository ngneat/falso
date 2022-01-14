import { FakeOptions, fake } from './core/core';
import { data } from './vehicle.json';

/**
 * Generate a random vehicle.
 *
 * @category TBD
 *
 * @example
 *
 * vehicle()
 *
 * @example
 *
 * vehicle({ length: 10 })
 *
 */
export function vehicle<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
