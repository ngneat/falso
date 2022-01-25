import { FakeOptions, fake } from './core/core';
import { data } from './vehicle.json';

/**
 * Generate a random vehicle.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicle()
 *
 * @example
 *
 * randVehicle({ length: 10 })
 *
 */
export function randVehicle<Options extends FakeOptions = FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
