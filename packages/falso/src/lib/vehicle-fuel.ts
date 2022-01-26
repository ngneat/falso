import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-fuel.json';

/**
 * Generate a random vehicle fuel.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleFuel()
 *
 * @example
 *
 * randVehicleFuel({ length: 10 })
 *
 */
export function randVehicleFuel<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
