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
 *
 * @automaticallyGeneratedExamples
 */

export function randVehicle<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
