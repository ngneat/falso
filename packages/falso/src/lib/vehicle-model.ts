import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-model.json';

/**
 * Generate a random vehicle model.
 *
 * @category vehicle
 *
 * @example
 *
 * randVehicleModel()
 *
 * @example
 *
 * randVehicleModel({ length: 10 })
 *
 *
 * @automaticallyGeneratedExamples
 */

export function randVehicleModel<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
