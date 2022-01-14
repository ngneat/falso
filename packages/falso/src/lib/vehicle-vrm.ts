import { FakeOptions, fake } from './core/core';
import { data } from './vehicle-vrm.json';

/**
 * Generate a random vehicle-vrm.
 *
 * @category TBD
 *
 * @example
 *
 * vehicleVrm()
 *
 * @example
 *
 * vehicleVrm({ length: 10 })
 *
 */
export function vehicleVrm<Options extends FakeOptions>(options?: Options) {
  return fake(data, options);
}
