import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-fuel.json';

/**
 * Generate a random vehicle-fuel.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleFuel()
 *
 * @example
 *
 * vehicleFuel({ length: 10 })
 *
 */
export function vehicleFuel<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
