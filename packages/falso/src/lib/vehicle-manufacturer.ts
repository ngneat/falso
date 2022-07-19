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
 *
 * @automaticallyGeneratedExamples
 * @example
 * 'Abarth'
 * 'Acura'
 * 'Alpine'
 */

export function randVehicleManufacturer<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
