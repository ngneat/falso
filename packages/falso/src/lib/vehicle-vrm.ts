import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-vrm.json';

/**
 * Generate a random vehicle-vrm.
 *
 * @category TBD
 *
 * @example
 *
 * randVehicleVrm()
 *
 * @example
 *
 * randVehicleVrm({ length: 10 })
 *
 */
export function randVehicleVrm<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
