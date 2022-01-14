import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-type.json';

/**
 * Generate a random vehicle-type.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleType()
 *
 * @example
 *
 * vehicleType({ length: 10 })
 *
 */
export function vehicleType<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
