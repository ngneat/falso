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
 *
 * @automaticallyGeneratedExamples
 */

export function randVehicleType<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
