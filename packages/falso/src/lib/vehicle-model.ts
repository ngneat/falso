import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-model.json';

/**
 * Generate a random vehicle-model.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleModel()
 *
 * @example
 *
 * vehicleModel({ length: 10 })
 *
 */
export function vehicleModel<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
