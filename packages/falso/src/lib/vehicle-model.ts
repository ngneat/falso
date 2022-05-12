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
 * @example
 *
 * randVehicleModel({ length: 10, priority: 'unique' }) // default is 'length'
 *
 */
export function randVehicleModel<Options extends FakeOptions = never>(
  options?: Options
) {
  return fake(data, options);
}
