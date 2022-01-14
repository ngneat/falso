import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-vin.json';

/**
 * Generate a random vehicle-vin.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleVin()
 *
 * @example
 *
 * vehicleVin({ length: 10 })
 *
 */
export function vehicleVin<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
