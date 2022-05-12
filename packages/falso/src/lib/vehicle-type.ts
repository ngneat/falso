import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-type.json';

/**
 * Generate a random vehicle type.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleType()
 *
 * @example
 *
 * randVehicleType({ length: 10 })
 *
 * @example
 *
 * randVehicleType({ length: 10, priority: 'unique' }) // default priority is 'length'
 *
 */
export function randVehicleType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
