import { FakeOptions, fake } from './core/core';
import { data } from './nearby-gpscoordinate.json';

/**
 * Generate a random GPS coordinate.
 *
 * @category address
 *
 * @example
 *
 * randNearbyGPSCoordinate()
 *
 * @example
 *
 * randNearbyGPSCoordinate({ length: 10 })
 *
 */
export function randNearbyGPSCoordinate<Options extends FakeOptions>(
  options?: Options
) {
  return fake(data, options);
}
