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
 */
export function randVehicleType<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
