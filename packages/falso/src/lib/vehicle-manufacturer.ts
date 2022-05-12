import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-manufacturer.json';

/**
 * Generate a random vehicle manufacturer.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleManufacturer()
 *
 * @example
 *
 * randVehicleManufacturer({ length: 10 })
 *
 * @example
 *
 * randVehicleManufacturer({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randVehicleManufacturer<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
