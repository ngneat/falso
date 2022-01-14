import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-manufacturer.json';

/**
 * Generate a random vehicle-manufacturer.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleManufacturer()
 *
 * @example
 *
 * vehicleManufacturer({ length: 10 })
 *
 */
export function vehicleManufacturer<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
