import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-manufacturer.json';

/**
 * Generate a random vehicle-manufacturer.
 *
 * @category TBD
 *
 * @example
 *
 * randVehicleManufacturer()
 *
 * @example
 *
 * randVehicleManufacturer({ length: 10 })
 *
 */
export function randVehicleManufacturer<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
