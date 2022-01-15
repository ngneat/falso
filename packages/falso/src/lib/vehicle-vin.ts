import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-vin.json';

/**
 * Generate a random vehicle-vin.
 *
 * @category TBD
 *
 * @example
 *
 * randVehicleVin()
 *
 * @example
 *
 * randVehicleVin({ length: 10 })
 *
 */
export function randVehicleVin<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
